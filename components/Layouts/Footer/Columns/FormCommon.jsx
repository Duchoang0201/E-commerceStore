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
    <div className="md:max-w-[217px] w-fit">
      <form
        title="Form Email"
        onSubmit={handleSubmit(onSubmit)}
        className="border-2 border-Neutral-50 rounded-md w-full md:flex md:flex-row md:justify-evenly flex flex-row justify-between md:w-full"
      >
        <Controller
          name="search"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="search"
              id="default-searchFooter"
              className=" bg-opacity-0 bg-black-0 overflow-visible rounded w-1/2 md:w-5/6  p-3 text-sm "
              placeholder="Enter your email"
            />
          )}
        />
        {errors.search && (
          <p className="text-red-500">{errors.search.message}</p>
        )}
        <button name="send email" className="mr-5" type="submit">
          <SendHorizontal color="white" />
        </button>
      </form>
    </div>
  );
}

export default Form;
