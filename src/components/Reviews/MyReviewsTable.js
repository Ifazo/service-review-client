import React from 'react';
import toast from 'react-hot-toast';

const MyReviewsTable = ({review}) => {
    const {_id} = review;

    const handleDelete = () => {
        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                toast.success('Review deleted successfully');
            }
        })
      }
    return (
        <>
            <tbody class="min-y-full divide-y divide-gray-200 bg-white">
              <tr>
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{review.name}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{review.description}</td>
                <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <button onClick={() => handleDelete(_id)} class="text-indigo-600 hover:text-indigo-900">Delete<span class="sr-only">, Lindsay Walton</span></button>
                </td>
              </tr>
            </tbody>
        </>
    );
};

export default MyReviewsTable;