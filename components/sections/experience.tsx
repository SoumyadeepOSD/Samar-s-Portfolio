import React from 'react';
import BoldText from '../bold-text';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const postingDetails = [
  {
    sl: 1,
    unit: 'PTS(TRG)',
    orderNo: 'VIDE DC HQ ORDER NO 356 DT. 07.05.1990',
    fromDate: '02-05-1990',
    deputation: '',
  },
  {
    sl: 2,
    unit: '6TH BN',
    orderNo: 'VIDE DC HQ ORDER NO 846 DT. 13.11.1990',
    fromDate: '15-11-1990',
    deputation: '',
  },
  {
    sl: 3,
    unit: '8TH BN',
    orderNo: 'VIDE DC HQ ORDER NO 80 DT. 31.01.2000',
    fromDate: '31-01-2000',
    deputation: '',
  },
  {
    sl: 4,
    unit: 'BHQ',
    orderNo: 'VIDE DC HQ ORDER NO 1209 DT. 09.10.2001',
    fromDate: '09-10-2001',
    deputation: `DEPT. TO BOI, MHA FOR 3 YEARS VIDE DC HQ ORDER NO 897 DT. 31.07.2003\nJOINED IN KP ON 31.10.2006 VIDE DC HQ ORDER NO 952 DT. 31.10.2006`,
  },
  {
    sl: 5,
    unit: 'SCO',
    orderNo: 'VIDE DC HQ ORDER NO 952 DT. 31.10.2006',
    fromDate: '31-10-2006',
    deputation: '',
  },
  {
    sl: 6,
    unit: 'SD(ASI)',
    orderNo: 'VIDE DC 1ST BN ORDER NO 2158 DT. 17.12.2009',
    fromDate: '17-12-2009',
    deputation: '',
  },
  {
    sl: 7,
    unit: 'EB(SI)',
    orderNo: 'VIDE DC 1ST BN ORDER NO 199 DT. 29.02.2024',
    fromDate: '29-02-2024',
    deputation: '',
  },
];

const PostingDetails = () => {
  return (
    <div className="text-white max-w-[800px] mx-auto">
      <BoldText label="Work Experience" />
      <Table className="table-auto border border-gray-700 w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">Sl.</TableHead>
            <TableHead className="w-[100px]">Unit</TableHead>
            <TableHead className="w-[300px]">Order No.</TableHead>
            <TableHead className="w-[100px]">From Date</TableHead>
            <TableHead className="w-[200px]">Deputation, if any</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {postingDetails.map((detail) => (
            <TableRow key={detail.sl}>
              <TableCell className="break-words">{detail.sl}</TableCell>
              <TableCell className="break-words">{detail.unit}</TableCell>
              <TableCell className="break-words">{detail.orderNo}</TableCell>
              <TableCell className="break-words">{detail.fromDate}</TableCell>
              <TableCell className="break-words whitespace-pre-line">
                {detail.deputation}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PostingDetails;
