import React, { Component } from 'react';

class Sidebar extends Component {

    render() {
        return (
            <aside id="sidebar">
                <div id="search" className="sidebar-item">
                    <h3>Buscador</h3>
                    <p>Encuentra el platillo que buscas</p>

                    <form>
                        <input type="text" name="search" />
                        <input type="submit" name="submit" value="Buscar" className="btn-sucess"/>
                    </form>
                </div>
            </aside>               
        );
    }

}
export default Sidebar;