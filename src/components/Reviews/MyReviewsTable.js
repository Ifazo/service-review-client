import React from 'react';

const MyReviewsTable = ({review}) => {
    return (
        <>
            <tbody class="min-y-full divide-y divide-gray-200 bg-white">
              <tr>
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{review.name}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{review.description}</td>
                <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <a href="/delete" class="text-indigo-600 hover:text-indigo-900">Delete<span class="sr-only">, Lindsay Walton</span></a>
                </td>
              </tr>
            </tbody>
        </>
    );
};

export default MyReviewsTable;