const images = import.meta.glob(
  '@/assets/images/*.{jpg,png,svg}',
  { eager: true }
)

export default images