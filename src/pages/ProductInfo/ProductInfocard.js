import React from 'react';

const ProductInfocard = ({ img }) => {
    return (
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
                <div class="md:shrink-0">
                    <img class="h-48 w-full object-cover md:h-full md:w-48" src={img} alt="Man looking at item at a store" />
                </div>
                <div class="p-8">
                    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Shopping catagories</div>
                    <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Newly Arrived</a>
                    <p class="mt-2 text-slate-500">Ensuring the highest quality of any product is our first priority.It is ... </p>
                </div>
            </div>
        </div>
    );
};

export default ProductInfocard;