import React from "react";
import { Button, Table } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function Pricing() {
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-pricing p-4 p-lg-5">
        <h1 className="pricing-title mb-2">Choose a price that's right for your project.</h1>
        <p className="pricing-text mb-4">The total price includes the item price and a buyer fee.</p>

        <div className="d-flex gap-2">
          <Button variant="primary" className="fw-medium">Start Free Trial</Button>
          <Button variant="" className="btn-white fw-medium">Learn more</Button>
        </div>

        <hr className="my-4 opacity-0" />

        <Table className="table-pricing" responsive>
          <thead>
            <tr>
              <th className="w-32"></th>
              <th className="w-17 selected">
                <span>Free App</span>
                <div className="pricing-price">$0<small>/month</small></div>
              </th>
              <th className="w-17">
                <span>Personal App</span>
                <div className="pricing-price">$32<small>/month</small></div>
                <small>A discount of $30 a month if billed yearly</small>
              </th>
              <th className="w-17">
                <span>Team App</span>
                <div className="pricing-price">$65<small>/month</small></div>
                <small>A discount of 2% per month if billed yearly</small>
              </th>
              <th className="w-17">
                <span>Corporate App</span>
                <div className="pricing-price">$98<small>/month</small></div>
                <small>A discount of 2% per month if billed yearly</small>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="title">
              <td>Regular</td>
              <td className="selected">&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>
                <p className="mb-1">consectetur adipiscing elit</p>
                <small>Et quasi architecto beatae vitae dicta sunt explicabo</small>
              </td>
              <td className="selected"><i className="ri-check-fill"></i></td>
              <td><i className="ri-check-fill"></i></td>
              <td><i className="ri-check-fill"></i></td>
              <td><i className="ri-check-fill"></i></td>
            </tr>
            <tr>
              <td>Nemo enim ipsam voluptatem</td>
              <td className="selected">&nbsp;</td>
              <td>&nbsp;</td>
              <td><i className="ri-check-fill"></i></td>
              <td><i className="ri-check-fill"></i></td>
            </tr>
            <tr>
              <td>dolores eos qui ratione</td>
              <td className="selected">&nbsp;</td>
              <td><i className="ri-check-fill"></i></td>
              <td><i className="ri-check-fill"></i></td>
              <td><i className="ri-check-fill"></i></td>
            </tr>
            <tr>
              <td>sed quia consequuntur magni</td>
              <td className="selected"><span>0</span></td>
              <td><span>50</span></td>
              <td><span>300</span></td>
              <td><span>500</span></td>
            </tr>
            <tr>
              <td>exercitationem ullam</td>
              <td className="selected"><i className="ri-check-fill"></i></td>
              <td><i className="ri-check-fill"></i></td>
              <td><i className="ri-check-fill"></i></td>
              <td><i className="ri-check-fill"></i></td>
            </tr>
            <tr>
              <td><div className="d-flex align-items-center gap-2">Duis aute irure dolor <i className="ri-information-line"></i></div></td>
              <td className="selected">&nbsp;</td>
              <td>&nbsp;</td>
              <td><i className="ri-check-fill"></i></td>
              <td><i className="ri-check-fill"></i></td>
            </tr>
            <tr>
              <td><div className="d-flex align-items-center gap-2">voluptatem sequi <i className="ri-information-line"></i></div></td>
              <td className="selected">&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td><i className="ri-check-fill"></i></td>
            </tr>
            <tr>
              <td><div className="d-flex align-items-center gap-2">dignissimos <i className="ri-information-line"></i></div></td>
              <td className="selected"><i className="ri-check-fill"></i></td>
              <td><i className="ri-check-fill"></i></td>
              <td><i className="ri-check-fill"></i></td>
              <td><i className="ri-check-fill"></i></td>
            </tr>
            <tr className="title">
              <td>Extended</td>
              <td className="selected">&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>blanditiis praesentium</td>
              <td className="selected">&nbsp;</td>
              <td><i className="ri-check-fill"></i></td>
              <td><i className="ri-check-fill"></i></td>
              <td><i className="ri-check-fill"></i></td>
            </tr>
            <tr>
              <td>culpa qui officia deserunt</td>
              <td className="selected">&nbsp;</td>
              <td>&nbsp;</td>
              <td><i className="ri-check-fill"></i></td>
              <td><i className="ri-check-fill"></i></td>
            </tr>
            <tr>
              <td><div className="d-flex align-items-center gap-2">optio cumque nihil impedit <i className="ri-information-line"></i></div></td>
              <td className="selected"><span>1</span></td>
              <td><span>10</span></td>
              <td><span>100</span></td>
              <td><span>1,000</span></td>
            </tr>
            <tr>
              <td>reiciendis voluptatibus maiores</td>
              <td className="selected"><span>1000</span></td>
              <td><span>1000</span></td>
              <td><span>1000</span></td>
              <td><span>custom</span></td>
            </tr>
            <tr>
              <td>alias consequatur</td>
              <td className="selected"><span>1GB</span></td>
              <td><span>10GB</span></td>
              <td><span>100GB</span></td>
              <td><span>100GB</span></td>
            </tr>
            <tr>
              <td><div className="d-flex align-items-center gap-2">maxime placeat facere <i className="ri-information-line"></i></div></td>
              <td className="selected"><i className="ri-check-fill"></i></td>
              <td><i className="ri-check-fill"></i></td>
              <td><i className="ri-check-fill"></i></td>
              <td><i className="ri-check-fill"></i></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td className="selected"><Button variant="primary">Choose Plan</Button></td>
              <td><Button variant="primary">Choose Plan</Button></td>
              <td><Button variant="primary">Choose Plan</Button></td>
              <td><Button variant="primary">Choose Plan</Button></td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Footer />
    </React.Fragment>
  );
}