import React, { useState, useEffect, useCallback } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './DraftEditor.css';

interface DraftEditorProps {
  initialValue?: string;
  onChange?: (html: string) => void;
  onContentChange?: (content: { text: string; html: string }) => void;
  maxChars?: number;
}

const DraftEditor: React.FC<DraftEditorProps> = ({
  initialValue = '',
  onChange,
  onContentChange,
  maxChars = 275
}) => {
  const [editorState, setEditorState] = useState(() => {
    if (initialValue) {
      const contentBlock = htmlToDraft(initialValue);
      if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(
          contentBlock.contentBlocks
        );
        return EditorState.createWithContent(contentState);
      }
    }
    return EditorState.createEmpty();
  });

  const [charCount, setCharCount] = useState(0);

  const handleEditorChange = useCallback(
    (newEditorState: EditorState) => {
      const currentContent = newEditorState.getCurrentContent();
      const currentContentLength = currentContent.getPlainText('').length;

      if (currentContentLength <= maxChars) {
        setEditorState(newEditorState);
        setCharCount(currentContentLength);

        const rawContentState = convertToRaw(currentContent);
        const htmlContent = draftToHtml(rawContentState);
        onChange?.(htmlContent);

        onContentChange?.({
          text: currentContent.getPlainText(),
          html: htmlContent
        });
      }
    },
    [maxChars, onChange, onContentChange]
  );

  useEffect(() => {
    const currentContent = editorState.getCurrentContent();
    const currentContentLength = currentContent.getPlainText('').length;
    setCharCount(currentContentLength);

    const rawContentState = convertToRaw(currentContent);
    const htmlContent = draftToHtml(rawContentState);
    onChange?.(htmlContent);
    onContentChange?.({
      text: currentContent.getPlainText(),
      html: htmlContent
    });
  }, []);

  const charsLeft = maxChars - charCount;
  const isOverLimit = charsLeft < 0;

  return (
    <div className="draft-editor-container">
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName="draft-editor-wrapper"
        editorClassName="draft-editor-content"
        toolbarClassName="draft-editor-toolbar"
        toolbar={{
          options: ['inline', 'list'],
          inline: {
            options: ['bold', 'italic', 'underline'],
            bold: { className: 'toolbar-button' },
            italic: { className: 'toolbar-button' },
            underline: { className: 'toolbar-button' }
          },
          list: {
            options: ['unordered', 'ordered'],
            unordered: { className: 'toolbar-button' },
            ordered: { className: 'toolbar-button' }
          }
        }}
      />
      <p
        className={`draft-editor-char-counter ${isOverLimit ? 'over-limit' : ''}`}
      >
        {Math.abs(charsLeft)} characters {isOverLimit ? 'over' : 'left'}
      </p>
    </div>
  );
};

export default DraftEditor;
