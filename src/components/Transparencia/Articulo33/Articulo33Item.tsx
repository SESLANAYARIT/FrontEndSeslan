import { Link } from "react-router-dom";

interface Articulo33ItemProps {
  nameFraccion: string;
  Icono: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
    }
  >;
  Fkey: number;
}

export const Articulo33Item = ({
  nameFraccion,
  Icono,
  Fkey,
}: Articulo33ItemProps) => {
  return (
    <div className="bg-gradient-to-r from-[#f3f4f6] to-[#e5e7eb] rounded-lg shadow-lg overflow-hidden cursor-pointer hover:from-[#e5e7eb] hover:to-[#d1d5db]">
        <Link to={`${Fkey}`} aria-label="Articulo 33 Fraccion">
      <div className="flex items-center justify-center h-full p-6">
        <Icono width={40} height={40} title={nameFraccion} className="mr-4" />
        <div className="flex-1">
          <h3 className="text-lg font-bold">{nameFraccion}</h3>
        </div>
      </div>
      </Link>
    </div>
  );
};
