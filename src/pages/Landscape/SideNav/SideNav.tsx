const SideNav: React.FC = () => {
    return (
        <div className="flex w-1/5 mt-10 mb-10">
            <div className="flex flex-col gap-15 rock-salt-text text-2xl flex-1">
                <button>
                    Logo
                </button>
                <button>
                    Work .
                </button>
                <button>
                    Contact
                </button>
                <button>
                    About
                </button>
            </div>
            <div className="w-[3px] bg-black rounded-full self-stretch" />
        </div>
    )
}

export default SideNav;
