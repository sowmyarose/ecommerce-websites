import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Emily Johnson",
    rating: 5,
    comment:
      "Absolutely love this dress! The fabric is high quality and very comfortable.",
  },
  {
    id: 2,
    name: "Michael Smith",
    rating: 4,
    comment: "Great product! Fits well but took a little longer to deliver.",
  },
  {
    id: 3,
    name: "Sophia Brown",
    rating: 5,
    comment:
      "Perfect! Exactly as shown in the pictures, and the size was just right.",
  },
  {
    id: 4,
    name: "James Wilson",
    rating: 3,
    comment: "Good quality but expected a better fit. Overall, not bad!",
  },
];

export default function ProductReviews() {
  return (
    <div className="mt-12 flex flex-col bg-white">
      <h2 className="text-black text-4xl">Customer reviews</h2>

      {reviews.map((review) => (
        <div key={review.id} className="border-b py-4">
          <h3 className="font-semibold text-lg">{review.name}</h3>
          <div className="flex items-center mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Image
                key={i}
                src={
                  i < review.rating
                    ? "/clothing/star-filled.svg"
                    : "/clothing/star-empty.svg"
                }
                alt="satr"
                width={10}
                height={10}
                className="mr-1"
              />
            ))}
          </div>
          <p className="text-gray-700">{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
