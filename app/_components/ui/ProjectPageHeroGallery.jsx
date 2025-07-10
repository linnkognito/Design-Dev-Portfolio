function ProjectPageHeroGallery({ images }) {
  if (!images) return null;

  return (
    <div className='hidden md:grid grid-cols-2 gap-5'>
      {images.map((image) => (
        <Image src={image.src} alt={image.alt} />
      ))}
    </div>
  );
}

export default ProjectPageHeroGallery;
