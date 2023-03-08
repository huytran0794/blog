import React, { useState, useEffect } from 'react';
import CoppyToClipboard from 'react-copy-to-clipboard';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

function Code({ children, language }) {
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        let timer = setTimeout(() => {
            setCopied(false)
        }, 500)

        return () => {
            clearTimeout(timer)
        }
    }, [copied])

    return (
        <div className="code">
            <CoppyToClipboard text={children} onCopy={() => setCopied(true)}>
                {copied ? <ContentPasteIcon /> : <ContentCopyIcon />}
            </CoppyToClipboard>
            <SyntaxHighlighter language={language} style={materialDark}>
                {children}
            </SyntaxHighlighter>
        </div>
    );
}

export default Code;