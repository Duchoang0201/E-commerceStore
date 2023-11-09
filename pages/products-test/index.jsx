import React from "react";
import axios from "axios";
import Image from "next/image";
import PropTypes from "prop-types";

function ProductsTest({ products }) {
  const { data } = products;

  return (
    <div className="container">
      <div className="my-[80px]">
        <div className="grid lg:grid-cols-4 gap-10 md:grid-cols-3  grid-cols-2">
          {data.length <= 0 ? (
            <div className="text-center">No Data</div>
          ) : (
            data.map((item) => (
              <div key={item.id} className="w-full relative ">
                <div className="group overflow-hidden relative w-auto rounded-md">
                  <Image
                    className="object-contain aspect-[270/250] w-full"
                    width={270}
                    height={250}
                    src={item.imageUrl}
                    alt={item.name}
                  />
                  <div className="absolute h-10 w-full bg-black-0  flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="bg-black text-white-0 py-2 px-5"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>

                <div className="pt-4 flex flex-col gap-y-2">
                  <span className="font-medium truncate text-ellipsis overflow-hidden">
                    {item.name}
                  </span>
                  <div className="justify-center items-center font-medium">
                    <span className="text-Button-1  ">
                      ${Math.round(Number(item.price) * 0.8)}
                    </span>

                    <span className="px-4 line-through opacity-50">
                      ${item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsTest;

export async function getServerSideProps() {
  const data = await axios.get("http://localhost:3000/api/products");
  const { data: products } = data;
  return {
    props: {
      products,
    },
  };
}

ProductsTest.propTypes = {
  products: PropTypes.instanceOf(Object).isRequired,
};
