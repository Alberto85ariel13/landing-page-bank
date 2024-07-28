"use client"
import {useSearchParams, usePathname} from "next/navigation";
import Link from "next/link";

import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";

const Form = () => {
  const [state, setState] = useState({
    email: "",
    message: "",
    file: null
  });

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value, files } = e.target as HTMLInputElement;
    if (files) {
      setState({ ...state, [name]: files[0] });
    } else {
      setState({ ...state, [name]: value });
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let formData = new FormData();

    for (let [key, value] of Object.entries(state)) {
      formData.append(key, value || "");
    }

    // Use fetch or axios to submit the form
    await axios
      .post("{Formeezy-Endpoint}", formData)
      .then(({ data }) => {
        const { redirect } = data;
        // Redirect used for reCAPTCHA and/or thank you page
        window.location.href = redirect;
      })
      .catch((e) => {
        window.location.href = e.response.data.redirect;
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        placeholder="Enter email"
        onChange={handleChange}
        value={state.email}
        required
      />
      <textarea
        name="message"
        placeholder="Enter message"
        onChange={handleChange}
        value={state.message}
        required
      />
      <input type="file" name="file" onChange={handleChange} />
      <input
        name="bot-field"
        type="text"
        onChange={handleChange}
        style={{ display: "none" }}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export function Modal() {
    const searchParams = useSearchParams();
    const modal = searchParams.get("modal");
    const pathname = usePathname();

    return (
        <>
            {modal &&
                <dialog
                    className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
                    <div className="bg-white m-auto p-8">
                        <div className="flex flex-col items-center">
                            <Form />
                            <Link href={pathname}>
                                <button type="button" className="bg-red-500 text-white p-2">Close Modal</button>
                            </Link>
                        </div>
                    </div>
                </dialog>
            }
        </>
    );
}

