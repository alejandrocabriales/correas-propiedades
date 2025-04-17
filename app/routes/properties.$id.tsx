import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { PropertyFeatures } from "../components/property/PropertyFeatures";
import { PropertyMortgage } from "../components/property/PropertyMortgage";
import { PropertyDescription } from "../components/property/PropertyDescription";
import { ContactForm } from "../components/forms/ContactForm";
import type { Property } from "../types/property";
import { PropertyGallery } from "../components/property/PropertyGallery";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data || "error" in data) {
    return [
      { title: "Property Details" },
      { name: "description", content: "Property details at Correa Properties" },
    ];
  }

  return [
    {
      title: `${data.property.title} | Correa Properties`,
    },
    {
      name: "description",
      content: data.property.description,
    },
  ];
};

// Extracted data fetching function
async function fetchPropertyData(propertyId: string): Promise<Property> {
  // TODO: Replace with actual data fetching logic (e.g., from a database or API)
  const property: Property = {
    id: propertyId,
    title: "Premium penthouse in central Barcelona with panoramic views",
    description: `FEDORS GROUP offers an exclusive FOR SALE elegant large 5-room apartment on Vincent Hložník Street in the Condominium Renaissance residential complex.

Thanks to its unique location, the property has access to a large Japanese garden with an area of 35 m2, which can be accessed directly from the bedroom. The front of the apartment is at the height of the third floor, so the terrace is located just above the treetops, which gives the apartment a unique atmosphere.

The apartment offers extraordinary comfort, has a first-class interior from the leading architectural office Cakov Makara and equipment from renowned world furniture manufacturers.`,
    price: 1200000,
    location: "Barcelona I.",
    type: "Flat",
    area: {
      total: 307,
      usable: 224,
      terrace: 27.09,
      balcony: 6.63,
      garden: 35,
    },
    rooms: 5,
    bathrooms: 2,
    garages: 2,
    features: [
      "Kitchen with SIEMENS appliances",
      "VILLEROY BOCH bathrooms",
      "HANSGROHE fixtures",
      "Japanese garden",
      "Panoramic views",
      "Smart home system",
      "Underground parking",
      "Storage room",
    ],
    images: [
      "/images/placeholder-property.jpg",
      "/images/placeholder-property.jpg",
      "/images/placeholder-property.jpg",
    ],
    broker: {
      name: "Haylie Donin",
      phone: "+34 555 781 731",
      email: "haylie.donin@realestate.es",
      image: "/images/placeholder-property.jpg",
    },
    characteristics: {
      insulated: true,
      hasBalcony: true,
      hasTerrace: true,
      floor: 2,
      totalFloors: 5,
    },
  };
  return property;
}

export async function loader({ params }: LoaderFunctionArgs) {
  const propertyId = params.id!; // Non-null assertion

  try {
    const property = await fetchPropertyData(propertyId);
    return json({ property });
  } catch (error) {
    // Handle errors appropriately (e.g., return a 404 or 500 status)
    console.error("Error fetching property:", error);
    // You might want to return a specific error response here.
    return json({ error: "Failed to load property" }, { status: 500 });
  }
}

export default function PropertyPage() {
  const data = useLoaderData<typeof loader>();

  if ("error" in data) {
    return <div className="text-red-500">Error: {data.error}</div>;
  }

  if (!data.property) {
    return <div>Loading...</div>;
  }

  const { property } = data;

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <h1 className="text-4xl font-bold text-gray-900">{property.title}</h1>
          <PropertyGallery images={property.images} title={property.title} />
          <div className="space-y-4">
            <PropertyFeatures
              type={property.type}
              area={property.area.usable}
              location={property.location}
              rooms={property.rooms}
            />
            <PropertyMortgage price={property.price} />
          </div>
          <PropertyDescription description={property.description} />
        </div>
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <ContactForm
              propertyId={property.id}
              propertyTitle={property.title}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
