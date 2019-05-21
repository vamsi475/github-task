import React, { Component } from 'react'

export default class ListData extends Component {
    render() {
        return (
            <div>
                {this.props.gitdata.map((v) => (
                    <div key={v.id}>
                        <p>{v.login}</p>
                        <img src={v.avatar_url} height="100" width="100"></img>
                    </div>
                ))}

            </div>
        )
    }
}
