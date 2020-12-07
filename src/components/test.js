import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import '../styles/modal.css';

const Modals = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  
  return (
    <div>
      {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
      <button onClick={toggle} className='btnopen' >{buttonLabel}Thanh toán</button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
               <ModalHeader  toggle={toggle}>
                    <span className='spanHeader'>
                         Thông tin của bạn
                    </span>
                       
               </ModalHeader>    
      
          <ModalBody>
               {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}
               <Form>
                    <FormGroup>
                         <Label for="exampleEmail">Email</Label>
                         <Input type="email" name="email" id="exampleEmail"/>
                    </FormGroup>
                    <FormGroup>
                         <Label for="exampleName">Tên khách hàng</Label>
                         <Input type="text" name="name" id="exampleName"  />
                    </FormGroup>
                    <FormGroup>
                         <Label for="examplePhone">Số điện thoại</Label>
                         <Input type="phone" name="phone" id="examplePhone"  value=''/>
                    </FormGroup>
                    <FormGroup>
                         <Label for="exampleAddress">Địa chỉ</Label>
                         <Input type="textarea" name="text" id="exampleAddress" placeholder="Địa chỉ của bạn"/>
                    </FormGroup>
                    <FormGroup>
                         <Label for="exampleAddress">Sản phẩm</Label>
                         <Input type="textarea" name="text" id="exampleProduct" />
                    </FormGroup>
                    <FormGroup>
                         <Label for="exampleTotal">Tổng hóa đơn</Label>
                         <Input type="total" name="phone" id="exampleTotal"  />
                    </FormGroup>
                    {/* <FormGroup>
                         <Label for="examplePassword">Password</Label>
                         <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup> */}
                    <FormGroup>
                    {/* <Label for="exampleSelect">Select</Label>
                    <Input type="select" name="select" id="exampleSelect">
                         <option>1</option>
                         <option>2</option>
                         <option>3</option>
                         <option>4</option>
                         <option>5</option>
                    </Input> */}
                    </FormGroup>
                    <FormGroup>
                    {/* <Label for="exampleSelectMulti">Select Multiple</Label>
                    <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                         <option>1</option>
                         <option>2</option>
                         <option>3</option>
                         <option>4</option>
                         <option>5</option>
                    </Input> */}
                    </FormGroup>
                    <FormGroup>
                    {/* <Label for="exampleFile">File</Label>
                    <Input type="file" name="file" id="exampleFile" /> */}
                    {/* <FormText color="muted">
                         This is some placeholder block-level help text for the above input.
                         It's a bit lighter and easily wraps to a new line.
                    </FormText> */}
                    </FormGroup>
                    <FormGroup tag="fieldset">
                    {/* <legend>Radio Buttons</legend> */}
                    <FormGroup check>
                         {/* <Label check>
                         <Input type="radio" name="radio1" />{' '}
                         Option one is this and that—be sure to include why it's great
                         </Label> */}
                    </FormGroup>
                    <FormGroup check>
                         {/* <Label check>
                         <Input type="radio" name="radio1" />{' '}
                         Option two can be something else and selecting it will deselect option one
                         </Label> */}
                    </FormGroup>
                    <FormGroup check disabled>
                         {/* <Label check>
                         <Input type="radio" name="radio1" disabled />{' '}
                         Option three is disabled
                         </Label> */}
                    </FormGroup>
                    </FormGroup>
                    <FormGroup check>
                    {/* <Label check>
                         <Input type="checkbox" />{' '}
                         Check me out
                    </Label> */}
                    </FormGroup>
                    {/* <Button>Submit</Button> */}
               </Form>
          </ModalBody> 
        <ModalFooter>
          {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '} */}
          <Button color="primary" onClick={toggle}>Xác nhận</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
export default Modals;