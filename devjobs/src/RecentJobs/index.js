import React, { Component } from 'react';
import placeholder from './placeholder.png';

export default () => (
<div className="row columns has-background-white">
                <div className="column is-one-third ">
                    <div className="card large">
                        <div className="card-image">
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-96x96">
                                        <img src={placeholder}alt="Image"/>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title-strong-color is-4 no-padding">Job Title</p>
                                    <p><span className="title-strong-color is-6"><a href="http://twitter.com/#">Company Name</a></span></p>
                                    <p className="subtitle-strong-color is-6">Location</p>
                                </div>
                            </div>
                            <div className="content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo feugiat pellentesque. Integer tristique, dolor ac efficitur luctus
                                <div className="background-icon"><span className="icon-twitter"></span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-one-third">
                    <div className="card large">
                        <div className="card-image">
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-96x96">
                                        <img src={placeholder} alt="Image"/>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title-strong-color is-4 no-padding">Job Title</p>
                                    <p><span className="title-strong-color is-6"><a href="http://twitter.com/#">Company Name</a></span></p>
                                    <p className="subtitle-strong-color is-6">Location</p>
                                </div>
                            </div>
                            <div className="content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo feugiat pellentesque. Integer tristique, dolor ac efficitur luctus
                                <div className="background-icon"><span className="icon-facebook"></span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-one-third">
                    <div className="card large">
                        <div className="card-image">
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-96x96">
                                        <img src={placeholder} alt="Image"/>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title-strong-color is-4 no-padding">Job Title</p>
                                    <p><span className="title-strong-color is-6"><a href="http://twitter.com/#">Company Name</a></span></p>
                                    <p className="subtitle-strong-color is-6">Description</p>
                                </div>
                            </div>
                            <div className="content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo feugiat pellentesque. Integer tristique, dolor ac efficitur luctus
                                <div className="background-icon"><span className="icon-facebook"></span></div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

);
