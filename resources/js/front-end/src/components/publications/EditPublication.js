import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const EditPublication = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/publications/${id}`)
      .then(response => {
        setTitle(response.data.publication.title);
        setContent(response.data.publication.content);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  const updatePublication = (e) => {
    e.preventDefault();

    axios.put(`http://127.0.0.1:8000/api/publications/${id}`, { title, content })
      .then(response => {
        setSuccessMessage("Publication updated successfully!");
        navigate('/publications');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div >
      <div className="flex justify-center">
        <div className="w-2/3 mt-16">
          <div className="bg-white shadow-2xl shadow-gray-600 rounded-lg px-8 pt-6 pb-8 my-10">
            <h2 className="text-center text-2xl font-bold mb-4">Edit Form</h2>
            <hr className="my-4" />
            {successMessage && (
              <div className="bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-3" role="alert">
                <p className="font-bold">Success!</p>
                <p>{successMessage}</p>
              </div>
            )}
            <div className="form-wrapper">
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
                    Title:
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="content">
                    Content:
                  </label>
                  <CKEditor
                    editor={ClassicEditor}
                    data={content}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setContent(data);
                    }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  
                  <button
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={() => {
                      navigate('/publications');
                    }}
                    >
                    Cancel
                  </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    onClick={updatePublication}
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
                    
export default EditPublication;
