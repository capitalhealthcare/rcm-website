import Link from "next/link";
import { Fragment } from "react";

export const Home = () => (
  <Fragment>
    <li>
      <Link href="/">Home One</Link>
    </li>
    <li>
      <Link href="/index-two">Home Two</Link>
    </li>
    <li>
      <Link href="/index-three">Home Three</Link>
    </li>
    <li>
      <Link href="/index-four">Home Four</Link>
    </li>
    <li>
      <Link href="/index-five">Home Five</Link>
    </li>
  </Fragment>
);
export const Pages = () => (
  <Fragment>
    <li>
      <Link href="/pricing">Pricing Plan</Link>
    </li>
    <li>
      <Link href="/faq">Help &amp; FAQ</Link>
    </li>
    <li>
      <Link href="/gallery">Our Gallery</Link>
    </li>
    <li>
      <Link href="/appointments">Appointment</Link>
    </li>
  </Fragment>
);
export const Services = () => (
  <Fragment>
     <li>
      <Link href="/service">Patient Appointment and Registration</Link>
    </li>
    <li>
      <Link href="/service">Patient Eligibility and Benefits</Link>
    </li>
    <li>
      <Link href="/service">Billing & Claim Submission</Link>
    </li>
    <li>
      <Link href="/service">Charge Capture</Link>
    </li>
    <li>
      <Link href="/service">Medical Coding</Link>
    </li>
    <li>
      <Link href="/service">Provider Credentials</Link>
    </li>
    <li>
      <Link href="/service">AR Follow Up</Link>
    </li>
    <li>
      <Link href="/service"> Patient Collection</Link>
    </li>
    <li>
      <Link href="/service">Payment Posting</Link>
    </li>
    <li>
      <Link href="/service">Denial Management</Link>
    </li>
    <li>
      <Link href="/service">Rejection Management</Link>
    </li>

    <li>
      <Link href="/service-two">Service Two</Link>
    </li>
    <li>
      <Link href="/service-details">Service Details</Link>
    </li>
  </Fragment>
);
export const Doctor = () => (
  <Fragment>
    <li>
      <Link href="/doctor">Doctor</Link>
    </li>
    <li>
      <Link href="/doctor-details">Doctor Details</Link>
    </li>
  </Fragment>
);
export const Blog = () => (
  <Fragment>
    <li>
      <Link href="/blog-standard">Blog Standard</Link>
    </li>
    <li>
      <Link href="/blog-details">Blog Details</Link>
    </li>
  </Fragment>
);
export const Shop = () => (
  <Fragment>
    <li>
      <Link href="/shop">Shop</Link>
    </li>
    <li>
      <Link href="/product-details">Shop Details</Link>
    </li>
  </Fragment>
);
