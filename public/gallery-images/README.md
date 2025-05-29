
# Gallery Images Folder

This folder is where you should upload all your past program images.

## How to add images:

1. Create this folder in your public directory: `public/gallery-images/`
2. Upload your program images with names like:
   - program-1.jpg
   - program-2.jpg
   - program-3.jpg
   - etc.

3. Update the `allImages` array in `src/components/gallery/GalleryImages.tsx` to include your new images.

## Image naming convention:
- Use descriptive names like: `iot-workshop-2023.jpg`, `robotics-bootcamp.jpg`
- Supported formats: .jpg, .jpeg, .png, .webp
- Recommended size: 800x600 pixels or similar 4:3 aspect ratio

## Adding new images:
When you add new images to this folder, update the `allImages` array in the GalleryImages component with the correct path and details.

Example:
```javascript
{
  id: 13,
  src: "/gallery-images/your-new-image.jpg",
  alt: "Description of your program",
  title: "Your Program Title"
}
```
