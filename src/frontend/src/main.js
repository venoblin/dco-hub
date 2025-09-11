import Quill from 'quill'
import 'quill/dist/quill.snow.css'

const toolbarOptions = [
  [
    { header: [1, 2, 3, 4, 5, 6, false] },
    { size: ['small', false, 'large', 'huge'] }
  ],

  ['bold', 'italic', 'underline', 'strike', { color: [] }, { background: [] }],

  ['link', 'image', 'video', 'formula', 'blockquote', 'code-block'],

  [{ align: [] }, { direction: 'rtl' }, { indent: '-1' }, { indent: '+1' }],

  [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],

  [{ script: 'sub' }, { script: 'super' }],

  ['clean']
]

export const quill = new Quill('#editor', {
  modules: {
    toolbar: toolbarOptions
  },
  theme: 'snow'
})
