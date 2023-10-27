import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SendHorizontal } from "lucide-react";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  search: yup.string().email().required(),
});

function Form() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data, event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative bg-black  border-2 rounded">
          <Controller
            name="search"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="search"
                id="default-searchFooter"
                className="block bg-opacity-0 text-white  rounded border-gray-100 p-3 text-sm  bg-gray-50 w-full"
                placeholder="Enter your email"
              />
            )}
          />
          {errors.search && (
            <p className="text-red-500">{errors.search.message}</p>
          )}
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg"
          >
            <SendHorizontal />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
