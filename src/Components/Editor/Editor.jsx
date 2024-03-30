import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import React from 'react';



function Editor({ setDesc , desc = '' }) {

  return (
    <div className='w-full flex flex-col gap-3'>
        <span className='font-semibold text-[#2e424a]'>توضیحات</span>
        <CKEditor
            editor={ClassicEditor}
            data={desc}
            config={{
              language:{
                ui:'fa',
                content:'fa',
              },
              alignment: {
                options: [
                    { name: 'left', className: 'my-align-left' },
                    { name: 'right', className: 'my-align-right' }
                ]
            },
            }}
            onChange={(event, editor) => {
                const data = editor.getData();
                setDesc(data)
            }}
        />
    </div>
  )
}

export default Editor