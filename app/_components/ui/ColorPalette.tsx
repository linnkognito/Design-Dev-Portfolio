import type { ColorPalette } from '@/_types/project';

function ColorPalette({ colors }: { colors: ColorPalette }) {
  return (
    <div className={`flex max-sm:flex-wrap gap-3 mb-12 lg:mb-14`}>
      {colors.map((color) => (
        <div
          key={color.id}
          className={`grow max-sm:min-w-[110px] h-[50px] md:h-20 lg:h-16 w-auto rounded-[8px] ${color.color}`}
        />
      ))}
    </div>
  );
}

export default ColorPalette;
