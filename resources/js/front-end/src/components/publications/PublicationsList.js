import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';

const PublicationsList = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/publications')
      .then(response => {
        setPublications(response.data.publications);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const deletePublication = async (id) => {
    try {
      const { data } = await axios.delete(`http://127.0.0.1:8000/api/publications/${id}`);
      console.log(data.message);
      const updatedPublications = publications.filter(publication => publication.id !== id);
      setPublications(updatedPublications);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 mt-16">
      <h1 className="text-3xl font-bold mb-4">Publications List</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full shadow-xl shadow-black bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-left">
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Content</th>
              <th className="px-4 py-2">Edit</th>
              <th className="px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {publications.map(publication => (
              <tr key={publication.id} className="border-b border-gray-400 hover:bg-gray-100">
                <td className="px-4 py-2">{publication.title}</td>
                <td className="px-4 py-2" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(publication.content)}}></td>
                <td className="px-4 py-2">
                  <Link to={`/publications/${publication.id}/edit`} className="text-blue-600 hover:underline mr-2">Edit</Link>
                </td>
                <td className="px-4 py-2">
                  <button onClick={() => deletePublication(publication.id)} className="text-red-600 hover:underline ">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PublicationsList;
