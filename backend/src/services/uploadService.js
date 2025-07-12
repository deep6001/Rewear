const cloudinary = require('../config/cloudinary');
const fs = require('fs');

/**
 * Upload a single image to Cloudinary.
 * @param {string} tempFilePath - Path to the temporary file.
 * @param {string} folder - Optional Cloudinary folder name.
 * @returns {Promise<{url: string, public_id: string}>}
 */
const uploadSingleImage = async (tempFilePath, folder = '') => {
  const result = await cloudinary.uploader.upload(tempFilePath, {
    folder,
  });
  fs.unlinkSync(tempFilePath); 
  return { url: result.secure_url, public_id: result.public_id };
};

/**
 * Upload multiple images to Cloudinary.
 * @param {Array} files - Array of file objects (from express-fileupload or multer).
 * @param {string} folder - Optional Cloudinary folder name.
 * @returns {Promise<Array<{url: string, public_id: string}>>}
 */
const uploadMultipleImages = async (files, folder = '') => {
  const uploads = [];
  for (const file of files) {
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      folder,
    });
    fs.unlinkSync(file.tempFilePath);
    uploads.push({ url: result.secure_url, public_id: result.public_id });
  }

  return uploads;
};

const deleteImage = async (public_id) => {
  await cloudinary.uploader.destroy(public_id);
};

module.exports = {
  uploadSingleImage,
  uploadMultipleImages,
};
