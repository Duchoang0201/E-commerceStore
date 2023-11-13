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
    <div className="max-w-[217px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-2 border-Neutral-50 rounded-md w-full flex flex-row justify-evenly"
      >
        <Controller
          name="search"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="search"
              id="default-searchFooter"
              className=" bg-opacity-0 bg-black-0 overflow-visible rounded w-5/6  p-3 text-sm "
              placeholder="Enter your email"
            />
          )}
        />
        {errors.search && (
          <p className="text-red-500">{errors.search.message}</p>
        )}
        <button className="mr-5" type="submit">
          <SendHorizontal color="white" />
        </button>
      </form>
    </div>
  );
}

export default Form;
