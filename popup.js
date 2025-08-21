document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('input-text');
    const outputText = document.getElementById('output-text');
    const processBtn = document.getElementById('process-btn');
    const clearBtn = document.getElementById('clear-btn');
    const status = document.getElementById('status');
    const decodeModeBtn = document.getElementById('decode-mode');
    const encodeModeBtn = document.getElementById('encode-mode');
    const inputLabel = document.getElementById('input-label');
    const outputLabel = document.getElementById('output-label');

    let currentMode = 'decode'; // 'decode' or 'encode'

    // Function to show status messages
    function showStatus(message, type = 'info') {
        status.textContent = message;
        status.className = `status ${type}`;
        setTimeout(() => {
            status.textContent = '';
            status.className = 'status';
        }, 3000);
    }

    // Function to update UI based on mode
    function updateMode(mode) {
        currentMode = mode;
        
        if (mode === 'decode') {
            decodeModeBtn.classList.add('active');
            encodeModeBtn.classList.remove('active');
            inputLabel.textContent = 'Enter Base64 Encoded Value:';
            outputLabel.textContent = 'Decoded Result:';
            inputText.placeholder = 'Paste your base64 encoded value here...';
            outputText.placeholder = 'Decoded result will appear here...';
        } else {
            encodeModeBtn.classList.add('active');
            decodeModeBtn.classList.remove('active');
            inputLabel.textContent = 'Enter Text to Encode:';
            outputLabel.textContent = 'Base64 Encoded Result:';
            inputText.placeholder = 'Paste your text here to encode...';
            outputText.placeholder = 'Base64 encoded result will appear here...';
        }
        
        // Clear fields when switching modes
        inputText.value = '';
        outputText.value = '';
    }

    // Function to decode base64 (atob)
    function decodeBase64(input) {
        try {
            // Remove any whitespace and newlines
            const cleanInput = input.trim().replace(/\s/g, '');
            
            if (!cleanInput) {
                throw new Error('Please enter a base64 encoded value');
            }

            // Use atob function to decode
            const decoded = atob(cleanInput);
            return decoded;
        } catch (error) {
            throw new Error('Invalid base64 encoded value. Please check your input.');
        }
    }

    // Function to encode to base64 (btoa)
    function encodeBase64(input) {
        try {
            const text = input.trim();
            
            if (!text) {
                throw new Error('Please enter text to encode');
            }

            // Use btoa function to encode
            const encoded = btoa(text);
            return encoded;
        } catch (error) {
            throw new Error('Error encoding text. Please check your input.');
        }
    }

    // Process button click handler
    processBtn.addEventListener('click', function() {
        const input = inputText.value;
        
        try {
            let result;
            if (currentMode === 'decode') {
                result = decodeBase64(input);
                showStatus('Successfully decoded!', 'success');
            } else {
                result = encodeBase64(input);
                showStatus('Successfully encoded!', 'success');
            }
            outputText.value = result;
        } catch (error) {
            showStatus(error.message, 'error');
            outputText.value = '';
        }
    });

    // Mode toggle handlers
    decodeModeBtn.addEventListener('click', function() {
        updateMode('decode');
        showStatus('Switched to decode mode (atob)', 'info');
    });

    encodeModeBtn.addEventListener('click', function() {
        updateMode('encode');
        showStatus('Switched to encode mode (btoa)', 'info');
    });

    // Clear button click handler
    clearBtn.addEventListener('click', function() {
        inputText.value = '';
        outputText.value = '';
        showStatus('Cleared all fields', 'info');
    });

    // Enter key handler for quick processing
    inputText.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && e.ctrlKey) {
            e.preventDefault();
            processBtn.click();
        }
    });

    // Auto-process on paste (optional feature)
    inputText.addEventListener('paste', function(e) {
        // Small delay to ensure the paste event completes
        setTimeout(() => {
            const input = inputText.value;
            if (input.trim()) {
                try {
                    let result;
                    if (currentMode === 'decode') {
                        result = decodeBase64(input);
                        showStatus('Auto-decoded on paste!', 'success');
                    } else {
                        result = encodeBase64(input);
                        showStatus('Auto-encoded on paste!', 'success');
                    }
                    outputText.value = result;
                } catch (error) {
                    // Don't show error for auto-process, just leave it as is
                }
            }
        }, 100);
    });

    // Copy result to clipboard
    outputText.addEventListener('click', function() {
        if (outputText.value) {
            outputText.select();
            document.execCommand('copy');
            showStatus('Copied to clipboard!', 'success');
        }
    });

    // Initialize in decode mode
    updateMode('decode');
    showStatus('Ready! Switch between decode (atob) and encode (btoa) modes', 'info');
});
