import React , {Component} from 'react';

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Paginate = (props) => {
     return (
          <Pagination aria-label="Page navigation example">
               <PaginationItem>
                    <PaginationLink first href="#" />
               </PaginationItem>
               <PaginationItem>
                    <PaginationLink previous href="#" />
               </PaginationItem>
               <PaginationItem>
                    <PaginationLink href="" value='1'>
                         1
                    </PaginationLink>
               </PaginationItem>
               <PaginationItem>
                    <PaginationLink href="page=2">
                         2
                    </PaginationLink>
               </PaginationItem>
               <PaginationItem>
                    <PaginationLink href="page=3">
                         3
                    </PaginationLink>
               </PaginationItem>
               <PaginationItem>
                    <PaginationLink href="pghe=4">
                         4
                    </PaginationLink>
               </PaginationItem>
               <PaginationItem>
                    <PaginationLink href="page=5">
                         5
                    </PaginationLink>
               </PaginationItem>
               <PaginationItem>
                    <PaginationLink next href="#" />
               </PaginationItem>
               <PaginationItem>
                    <PaginationLink last href="#" />
               </PaginationItem>
          </Pagination>
  );
}





export default Paginate;