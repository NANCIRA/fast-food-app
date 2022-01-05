import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Slider from './Slider';


class Blog extends Component {

    render() {

        return (
            <div id="blog">

                <Slider
                    title="Blog"
                    size="small"
                                    
                />
                <div className="center">
                    
                    <div id="content">
                        {/*Listado de articulos que vendran del api rest de node*/}
                          
                    </div>

                    <Sidebar />

                    <div className="clearfix"></div>



                </div>

            </div>



        );
    }
}

export default Blog;