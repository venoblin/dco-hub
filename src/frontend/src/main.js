import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'

export const editor = new EditorJS({
  holder: 'editor-container',
  tools: {
    header: Header
  }
})
