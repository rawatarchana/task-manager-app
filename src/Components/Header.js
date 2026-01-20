const Header = ({username}) => {
    return(
        <header className="text-center my-4">
            <h3>Todo</h3>
            {
                username === "" ? null : <h4>Hello {username}</h4>
            }
        </header>
    )
}

export default Header;