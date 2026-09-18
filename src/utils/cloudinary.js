/**
 * Cloudinary Helper & Photo Upload Service
 * Uses Vite environment variables (VITE_CLOUDINARY_*)
 */

export const CLOUDINARY_CONFIG = {
  cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || '',
  uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || '',
  apiKey: import.meta.env.VITE_CLOUDINARY_API_KEY || '',
  baseUrl: import.meta.env.VITE_CLOUDINARY_URL || '',
};

/**
 * Uploads a photo file (File/Blob) directly to Cloudinary using unsigned upload preset
 * @param {File|Blob} file - Photo file to upload
 * @param {string} [folder=''] - Optional Cloudinary folder destination
 * @returns {Promise<string>} - Returns secure URL of uploaded photo
 */
export const uploadToCloudinary = async (file, folder = '') => {
  const { cloudName, uploadPreset } = CLOUDINARY_CONFIG;

  if (!cloudName) {
    throw new Error('Cloudinary cloud name is not configured. Please define VITE_CLOUDINARY_CLOUD_NAME in your .env file.');
  }

  if (!uploadPreset) {
    throw new Error('Cloudinary upload preset is not configured. Please define VITE_CLOUDINARY_UPLOAD_PRESET in your .env file.');
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', uploadPreset);
  if (folder) {
    formData.append('folder', folder);
  }

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const data = await response.json();

    if (!response.ok || data.error) {
      throw new Error(data.error?.message || 'Failed to upload photo to Cloudinary.');
    }

    return data.secure_url;
  } catch (error) {
    console.error('Error uploading photo to Cloudinary:', error);
    throw error;
  }
};

/**
 * Transforms or optimizes an image URL / Public ID via Cloudinary CDN
 * @param {string} publicIdOrUrl - Cloudinary public ID or image URL
 * @param {Object} [options={}] - Transformation options (width, height, crop, format, quality)
 * @returns {string} - Transformed Cloudinary URL
 */
export const getCloudinaryUrl = (publicIdOrUrl, options = {}) => {
  if (!publicIdOrUrl) return '';

  // If already a full http/https URL but from Cloudinary, apply auto optimization
  if (publicIdOrUrl.startsWith('http://') || publicIdOrUrl.startsWith('https://')) {
    if (publicIdOrUrl.includes('res.cloudinary.com')) {
      const transformations = 'f_auto,q_auto';
      return publicIdOrUrl.replace('/upload/', `/upload/${transformations}/`);
    }
    return publicIdOrUrl;
  }

  const { cloudName } = CLOUDINARY_CONFIG;
  const { width, height, crop = 'fill', quality = 'auto', format = 'auto' } = options;

  const transforms = [
    `f_${format}`,
    `q_${quality}`,
    width ? `w_${width}` : null,
    height ? `h_${height}` : null,
    width || height ? `c_${crop}` : null,
  ]
    .filter(Boolean)
    .join(',');

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transforms}/${publicIdOrUrl}`;
};

export default {
  CLOUDINARY_CONFIG,
  uploadToCloudinary,
  getCloudinaryUrl,
};
