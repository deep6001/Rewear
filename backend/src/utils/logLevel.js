const determineLogLevel = (status) => {
    if (status >= 500) return 'error'; // Server errors
    if (status >= 400) return 'error';  // Bad requests
    if (status >= 200) return 'info';  // Successful responses
    if (status >= 100) return 'info';  // Informational
    return 'debug';                   // Debug (for unexpected cases)
};

module.exports = { determineLogLevel }