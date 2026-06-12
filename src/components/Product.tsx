import Image from "next/image";

interface IProducts {
  title: string;
  img: string;
  description?: string;
  alt?: string;
}

const Product = ({ title, img, description, alt }: IProducts) => {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
      <div className="relative aspect-[4/3] w-full bg-brand-50 overflow-hidden">
        <Image
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          src={img}
          alt={alt || title}
        />
      </div>
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">
          {title}
        </h3>
        {description && (
          <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default Product;
