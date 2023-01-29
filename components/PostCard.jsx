const PostCard = () => {
    return (
        <div className="p-4 w-[322px] bg-white">
            <div className="flex items-center justify-between">
                <p className="text-[#6C6C6C] font-[400] text-[18px] leading-[140%]">Anonymous</p>
                <p className="text-[#6C6C6C] font-[400] text-[18px] leading-[140%]">2 mins ago</p>
            </div>
            <p className="my-4 font-[400] text-[18px] leading-[140%] text-black">Lorem ipsum dolor sit amet consectetur. Viverra quam mauris elementum tincidunt quis donec dui ullamcorper aenean. Placerat. Lorem ipsum dolor sit amet consectetur. Viverra quam mauris elementum.</p>
            <button className="text-white py-3 px-[18px] bg-[#1C2022] block ml-auto">Read More</button>
        </div>
    )
}

export default PostCard