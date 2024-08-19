
import { Menu, Button } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

type SideBarType = {
    collapsed: boolean,
    toggleCollapsed: () => void;
}
function SideBar({ collapsed, toggleCollapsed }: SideBarType) {

    return (
        <div className="relative">
            {!collapsed && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
                    onClick={toggleCollapsed}
                />
            )}
            <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: collapsed ? '-100%' : 0 }}
                transition={{ duration: 0.5 }}
                className="fixed inset-0 bg-white z-50 shadow-lg w-[300px]"

            >
                <div className="flex items-center justify-between p-4">
                    <div className="text-lg font-bold">Citi Movers</div>
                    <CloseOutlined onClick={toggleCollapsed} className="text-lg text-black" />
                </div>
                <Menu
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    theme="light"
                    className="h-full border-r-0 uppercase text-gray-500"
                >
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="3">Projects</Menu.Item>
                    <Menu.Item key="4">Blog</Menu.Item>
                    <Menu.Item key="5">Contact</Menu.Item>
                </Menu>
            </motion.div>
        </div>
    );
}

export default SideBar;