import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';


const Editor = () => {
    const [content, setContent] = useState('');
  
    const editorConfig = {
      plugins: [UploadAdapter],
      toolbar: ['imageUpload', '|', 'bold', 'italic', 'link'],
      simpleUpload: {
        uploadUrl: '/api/upload-image', // Replace with your upload endpoint URL
        headers: {
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        },
      },
    };
  
    return (
      <div>
        <h2>Editor</h2>
        <CKEditor
          editor={ClassicEditor}
          data={content}
          config={editorConfig}
          onChange={(event, editor) => {
            const data = editor.getData();
            setContent(data);
          }}
        />
      </div>
    );
  };
  
  export default Editor;
  