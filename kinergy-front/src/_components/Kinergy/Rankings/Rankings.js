import React from 'react';
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';
import './Rankings.scss';
export default function Rankings() {
  return (
    <>
      <div className="flex flex-col">
        <div className='flex items-baseline mt-4'>
          <div className="w-56 options-filter flex flex-col items-center justify-center">
            <p className='flex items-center justify-center'>Top rated</p>
            <p className='flex items-center justify-center'>financial volume</p>
            <p className='selected flex items-center justify-center'>Popular Owner</p>
          </div>
          <div className='ml-8 mr-2 w-full'>
            <Table hoverable={true}>
              <Table.Head>
                <Table.HeadCell>
                  Name
                </Table.HeadCell>
                <Table.HeadCell>
                  Categorie
                </Table.HeadCell>
                <Table.HeadCell>
                  Votes
                </Table.HeadCell>
                <Table.HeadCell>
                  Lock
                </Table.HeadCell>
                <Table.HeadCell>
                  <span className="sr-only">
                    Edit
                  </span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white">
                  <Table.Cell className="whitespace-nowrap font-bold text-lg">
                    Best movies gta v
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-bold text-sm">
                    Games
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-bold text-sm">
                    0
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-bold text-sm">
                    2999
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      to="/rankings"
                      className="btn-ranking font-bold text-lg"
                    >
                      View
                    </Link>
                  </Table.Cell>
                </Table.Row> 
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
