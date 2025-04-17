import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Select } from "../ui/select";

interface SearchBarProps {
  className?: string;
}

export const SearchBar = ({ className }: SearchBarProps) => {
  return (
    <div className="bg-[#F8F8F8] p-6 rounded-lg shadow-sm">
      <div className={`flex flex-col md:flex-row gap-4 ${className}`}>
        <div className="flex-1">
          <Select defaultValue="" className="w-full bg-white text-[#4F6064] border-[#8C8680] pr-8">
            <option value="" disabled>Tipo de propiedad</option>
            <option value="house">Casa</option>
            <option value="apartment">Apartamento</option>
            <option value="condo">Condominio</option>
            <option value="villa">Villa</option>
          </Select>
        </div>
        <div className="flex-[2] relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-map-pin"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <Input
            type="text"
            placeholder="Buscar por ubicación"
            className="pl-10 bg-white text-[#4F6064] border-[#8C8680]"
          />
        </div>
        <Button className="bg-[#4F6064] hover:bg-[#3D4C50] text-white px-8 py-2">
          Buscar
        </Button>
      </div>
    </div>
  );
};