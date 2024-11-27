const NotificationBox = ({ isOpen, onClose }) => {
    const notifications = [
      {
        id: 1,
        restaurant: "Park Lans View - Restaurant",
        orderId: "12345",
        time: "2 mins ago",
        message: "Your Order#12345 has been placed.kindly check the Orders tab to check the status of your orders."
      },
      {
        id: 2,
        restaurant: "Masonette - Cafe",
        orderId: "12345",
        time: "2 mins ago",
        message: "Your Order#12345 has been placed.kindly check the Orders tab to check the status of your orders."
      }
    ];
  
    if (!isOpen) return null;
  
    return (
      <div className="absolute right-[-60px] mt-2 w-96 bg-white rounded-lg shadow-lg overflow-hidden z-50">
        <div className="p-4">
          <h2 className="text-xl font-bold text-black">Notifications</h2>
          <p className="text-sm text-gray-600 mt-1">Today</p>
        </div>
  
        <div className="divide-y divide-gray-100">
          {notifications.map((notification) => (
            <div key={notification.id} className="p-4 mb-2 hover:bg-gray-50 cursor-pointer border"> 
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <img
                    src="/api/placeholder/48/48"
                    alt={notification.restaurant}
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div className="ml-3 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-black">
                      {notification.restaurant}
                    </p>
                    <p className="text-sm text-gray-500">{notification.time}</p>
                  </div>
                  <p className="text-base font-medium text-black mt-1">
                    Your order#{notification.orderId} has been placed
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {notification.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        <div className="p-4 bg-white border-t">
          <button className="w-full py-2 px-4 border border-yellow-500 text-yellow-500 rounded-lg hover:bg-yellow-50 transition-colors duration-200">
            Rate Supplier
          </button>
        </div>
      </div>
    );
  };
  
  export default  NotificationBox;