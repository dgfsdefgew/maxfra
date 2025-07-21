  // Receipt Page
  const ReceiptPage = () => (
    <div className="p-4 pb-20">
      <h2 className="text-xl font-bold text-gray-900 mb-6">🧾 Create Receipt</h2>
      
      {/* Step 1: Student Selection */}
      {isNewReceiptStudent === null ? (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">👤 Step 1: Select Customer Type</h3>
          
          <div className="space-y-4">
            <button
              onClick={() => setIsNewReceiptStudent(false)}
              className="w-full p-6 text-left bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 shadow-sm transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Existing Student</h4>
                  <p className="text-sm text-gray-600">Select from registered students</p>
                </div>
              </div>
            </button>
            
            <button
              onClick={() => setIsNewReceiptStudent(true)}
              className="w-full p-6 text-left bg-white rounded-xl border-2 border-gray-200 hover:border-green-300 shadow-sm transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Plus className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">New Customer</h4>
                  <p className="text-sm text-gray-600">Enter customer details manually</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      ) : isNewReceiptStudent === true && !selectedStudent ? (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">👤 Step 1: Enter New Customer</h3>
          
          <div className="p-6 bg-green-50 rounded-xl border-2 border-green-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Plus className="w-5 h-5 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-green-900">New Customer Information</h4>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  value={newReceiptStudent.name}
                  onChange={(e) => setNewReceiptStudent({...newReceiptStudent, name: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-green-400 focus:ring-2 focus:ring-green-100"
                  placeholder="Enter customer name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                <input
                  type="tel"
                  value={newReceiptStudent.phone}
                  onChange={(e) => setNewReceiptStudent({...newReceiptStudent, phone: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-green-400 focus:ring-2 focus:ring-green-100"
                  placeholder="+52 55 1234 5678"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email (Optional)</label>
                <input
                  type="email"
                  value={newReceiptStudent.email}
                  onChange={(e) => setNewReceiptStudent({...newReceiptStudent, email: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-green-400 focus:ring-2 focus:ring-green-100"
                  placeholder="customer@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service/Course (Optional)</label>
                <input
                  type="text"
                  value={newReceiptStudent.program}
                  onChange={(e) => setNewReceiptStudent({...newReceiptStudent, program: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-green-400 focus:ring-2 focus:ring-green-100"
                  placeholder="Course or service name"
                />
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={() => setIsNewReceiptStudent(null)}
                  className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                >
                  ← Back
                </button>
                <button
                  onClick={() => {
                    if (newReceiptStudent.name && newReceiptStudent.phone) {
                      // Mark as having valid customer info - will proceed to items
                    } else {
                      alert('Please enter customer name and phone number');
                    }
                  }}
                  disabled={!newReceiptStudent.name || !newReceiptStudent.phone}
                  className="flex-2 bg-green-600 text-white py-3 rounded-lg font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-green-700 transition-colors"
                >
                  ✅ Continue to Items
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : isNewReceiptStudent === false && !selectedStudent ? (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">👤 Step 1: Select Existing Student</h3>
          
          <div className="mb-4">
            <button
              onClick={() => setIsNewReceiptStudent(null)}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to Customer Type</span>
            </button>
          </div>
          
          <div className="space-y-3">
            {students.map((student) => (
              <button
                key={student.id}
                onClick={() => setSelectedStudent(student)}
                className="w-full p-4 text-left bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors shadow-sm"
              >
                <h5 className="font-medium text-gray-900">{student.name}</h5>
                <p className="text-sm text-gray-600">{student.program}</p>
                <p className="text-xs text-gray-500">{student.phone}</p>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          {/* Step 2: Customer Info Summary */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-xl mb-6 border border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  👤 {isNewReceiptStudent ? newReceiptStudent.name : selectedStudent.name}
                </h3>
                <p className="text-sm text-gray-600">
                  📞 {isNewReceiptStudent ? newReceiptStudent.phone : selectedStudent.phone}
                </p>
                {(isNewReceiptStudent ? newReceiptStudent.program : selectedStudent.program) && (
                  <p className="text-sm text-gray-600">
                    📚 {isNewReceiptStudent ? newReceiptStudent.program : selectedStudent.program}
                  </p>
                )}
              </div>
              <button
                onClick={() => {
                  setSelectedStudent(null);
                  setIsNewReceiptStudent(false);
                  setNewReceiptStudent({ name: '', phone: '', email: '', program: '' });
                  setReceiptItems([]);
                }}
                className="px-3 py-2 bg-white text-gray-600 rounded-lg border border-gray-300 hover:bg-gray-50 text-sm font-medium"
              >
                🔄 Change
              </button>
            </div>
          </div>

          {/* Step 3: Add Items */}
          <h3 className="text-lg font-semibold text-gray-900 mb-4">💰 Step 2: Add Items to Receipt</h3>
          
          {/* Add Custom Item Form - Always Visible */}
          <div className="mb-6 p-6 bg-purple-50 rounded-xl border-2 border-purple-200">
            <h4 className="text-lg font-semibold text-purple-900 mb-4">➕ Add New Item</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Item/Service Name *</label>
                <input
                  type="text"
                  value={customItem.name}
                  onChange={(e) => setCustomItem({...customItem, name: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
                  placeholder="e.g., Microblading Course, Registration Fee, Materials..."
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price (MXN) *</label>
                  <input
                    type="number"
                    value={customItem.price}
                    onChange={(e) => setCustomItem({...customItem, price: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                  <input
                    type="number"
                    value={customItem.quantity}
                    onChange={(e) => setCustomItem({...customItem, quantity: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
                    min="1"
                    defaultValue="1"
                  />
                </div>
              </div>
              <button
                onClick={addCustomItem}
                disabled={!customItem.name || !customItem.price}
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-purple-700 transition-colors"
              >
                ➕ Add Item to Receipt
              </button>
            </div>
          </div>
          
          {/* Quick Add Predefined Items */}
          <div className="mb-6">
            <h4 className="text-md font-semibold text-gray-800 mb-3">🚀 Quick Add Common Items:</h4>
            <div className="grid grid-cols-1 gap-3">
              {catalogItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <h5 className="font-medium text-gray-900">{item.name}</h5>
                      <p className="text-sm text-gray-600">{item.category}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="text-sm text-gray-600">Price: $</span>
                        <input
                          type="number"
                          value={item.price}
                          onChange={(e) => updateCatalogItemPrice(item.id, e.target.value)}
                          className="w-20 p-1 text-sm border border-gray-200 rounded focus:border-blue-300"
                          min="0"
                          step="0.01"
                        />
                      </div>
                    </div>
                    <button
                      onClick={() => addReceiptItem(item)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Receipt Items */}
          {receiptItems.length > 0 && (
            <div className="bg-gray-50 rounded-xl p-6 mb-6 border-2 border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🧾 Receipt Items</h3>
              <div className="space-y-4">
                {receiptItems.map((item, index) => (
                  <div key={item.id} className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h5 className="font-medium text-gray-900">{item.name}</h5>
                        <div className="flex items-center space-x-3 mt-2">
                          <div className="flex items-center space-x-1">
                            <span className="text-sm text-gray-600">Qty:</span>
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => updateItemQuantity(item.id, parseInt(e.target.value) || 1)}
                              className="w-16 p-1 text-sm border border-gray-200 rounded focus:border-blue-300"
                              min="1"
                            />
                          </div>
                          <div className="flex items-center space-x-1">
                            <span className="text-sm text-gray-600">× $</span>
                            <input
                              type="number"
                              value={item.price}
                              onChange={(e) => updateItemPrice(item.id, e.target.value)}
                              className="w-24 p-1 text-sm border border-gray-200 rounded focus:border-blue-300"
                              min="0"
                              step="0.01"
                            />
                          </div>
                          <div className="text-sm font-semibold text-gray-700">
                            = ${(item.price * item.quantity).toLocaleString()}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => removeReceiptItem(item.id)}
                        className="text-red-600 hover:text-red-800 p-1"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
                
                {/* Total */}
                <div className="border-t-2 pt-4 mt-4">
                  <div className="flex justify-between items-center bg-green-100 p-4 rounded-lg">
                    <span className="text-xl font-bold text-gray-900">TOTAL:</span>
                    <span className="text-2xl font-bold text-green-600">${calculateTotal().toLocaleString()} MXN</span>
                  </div>
                </div>
              </div>
              
              {/* Generate Receipt Button */}
              <button
                onClick={generateReceipt}
                className="w-full mt-6 bg-green-600 text-white py-4 rounded-xl text-lg font-bold hover:bg-green-700 transition-colors shadow-lg"
              >
                🖨️ Generate Receipt
              </button>
            </div>
          )}

          {/* Empty State */}
          {receiptItems.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <Receipt className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">No items added yet</p>
              <p className="text-sm">Add items above to create the receipt</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
                import React, { useState } from 'react';
import { Calendar, Users, Plus, Receipt, Award, Clock, MapPin, User, Phone, Mail, Check, X, ChevronLeft, Bell, Search, Settings, BookOpen, GraduationCap, TrendingUp, Star, Edit, Trash2 } from 'lucide-react';

const MAXFRADirectorMVP = () => {
  const [currentPage, setCurrentPage] = useState('main');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [receiptItems, setReceiptItems] = useState([]);
  const [isNewReceiptStudent, setIsNewReceiptStudent] = useState(null); // null = not chosen, true = new, false = existing
  const [newReceiptStudent, setNewReceiptStudent] = useState({
    name: '',
    phone: '',
    email: '',
    program: ''
  });
  const [customItem, setCustomItem] = useState({
    name: '',
    price: '',
    quantity: 1
  });
  const [showCustomItemForm, setShowCustomItemForm] = useState(false);
  const [calendarDays, setCalendarDays] = useState(7);
  const [calendarStartDate, setCalendarStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  
  // Core state data
  const [locations, setLocations] = useState([
    { id: 1, name: 'Polanco', address: 'Presidente Masaryk 456', phone: '+52 55 3333 4444', manager: 'Carlos Rivera', status: 'Active' },
    { id: 2, name: 'Ciudad Brisas', address: 'Av. Insurgentes Sur 123', phone: '+52 55 1111 2222', manager: 'Sofia Mendez', status: 'Active' },
    { id: 3, name: 'Pedregal', address: 'Periférico Sur 789', phone: '+52 55 5555 6666', manager: 'Diana Herrera', status: 'Active' }
  ]);

  const [teachers, setTeachers] = useState([
    { id: 1, name: 'Fer', specialty: 'Microblading & PMU', experience: '8 years', rating: 4.9, status: 'Active' },
    { id: 2, name: 'Maggy', specialty: 'Eyelash Extensions', experience: '12 years', rating: 4.8, status: 'Active' },
    { id: 3, name: 'Pao', specialty: 'Henna & Lifting', experience: '6 years', rating: 4.9, status: 'Active' },
    { id: 4, name: 'Ashley', specialty: 'Advanced Techniques', experience: '10 years', rating: 4.7, status: 'Active' }
  ]);

  const [services, setServices] = useState([
    // Courses
    { id: 1, name: 'Microblading Certification', duration: '3 hours', price: 2500, category: 'Course', type: 'Course' },
    { id: 2, name: 'Eyelash Extensions Course', duration: '2-3 hours', price: 2200, category: 'Course', type: 'Course' },
    { id: 3, name: 'Henna Specialist Course', duration: '2 hours', price: 1800, category: 'Course', type: 'Course' },
    { id: 4, name: 'Advanced Microblading', duration: '3 hours', price: 3500, category: 'Course', type: 'Course' },
    { id: 5, name: 'Volume Lashes Course', duration: '3 hours', price: 2800, category: 'Course', type: 'Course' },
    
    // Services
    { id: 6, name: 'Microblading Touch-up', duration: '1 hour', price: 800, category: 'Service', type: 'Service' },
    { id: 7, name: 'Eyelash Application', duration: '1.5 hours', price: 600, category: 'Service', type: 'Service' },
    { id: 8, name: 'Eyebrow Shaping', duration: '30 minutes', price: 300, category: 'Service', type: 'Service' },
    { id: 9, name: 'Consultation', duration: '30 minutes', price: 200, category: 'Service', type: 'Service' },
    
    // Information Sessions
    { id: 10, name: 'Career Information Session', duration: '1 hour', price: 0, category: 'Information', type: 'Information' },
    { id: 11, name: 'Course Overview', duration: '45 minutes', price: 0, category: 'Information', type: 'Information' },
    { id: 12, name: 'Academy Tour', duration: '30 minutes', price: 0, category: 'Information', type: 'Information' }
  ]);

  const [students, setStudents] = useState([
    { id: 1, name: 'Emma Rodriguez', phone: '+52 55 1234 5678', email: 'emma@email.com', program: 'Microblading Certification', progress: 85, status: 'Active' },
    { id: 2, name: 'Sophia Kim', phone: '+52 55 2345 6789', email: 'sophia@email.com', program: 'Eyelash Extensions', progress: 92, status: 'Active' },
    { id: 3, name: 'Isabella Chen', phone: '+52 55 3456 7890', email: 'isabella@email.com', program: 'Henna Specialist', progress: 78, status: 'Active' },
    { id: 4, name: 'Maria Garcia', phone: '+52 55 4567 8901', email: 'maria@email.com', program: 'Advanced Microblading', progress: 100, status: 'Graduated' }
  ]);

  const [appointments, setAppointments] = useState([
    // Today's appointments
    { id: 1, student: 'Emma Rodriguez', service: 'Microblading', time: '10:00 AM - 1:00 PM', location: 'Polanco', instructor: 'Fer', status: 'confirmed', date: new Date().toISOString().split('T')[0] },
    { id: 2, student: 'Sophia Kim', service: 'Eyelash Extensions', time: '1:00 PM - 3:00 PM', location: 'Ciudad Brisas', instructor: 'Maggy', status: 'pending', date: new Date().toISOString().split('T')[0] },
    { id: 3, student: 'Isabella Chen', service: 'Henna Eyebrows', time: '3:00 PM - 5:00 PM', location: 'Pedregal', instructor: 'Pao', status: 'confirmed', date: new Date().toISOString().split('T')[0] },
    { id: 4, student: 'Ana Gutierrez', service: 'Volume Lashes', time: '10:00 AM - 1:00 PM', location: 'Polanco', instructor: 'Ashley', status: 'confirmed', date: new Date().toISOString().split('T')[0] },
    { id: 5, student: 'Carmen Lopez', service: 'Advanced Microblading', time: '5:00 PM - 8:00 PM', location: 'Ciudad Brisas', instructor: 'Fer', status: 'pending', date: new Date().toISOString().split('T')[0] },
    
    // Tomorrow's appointments
    { id: 6, student: 'Lucia Martinez', service: 'Microblading', time: '10:00 AM - 1:00 PM', location: 'Pedregal', instructor: 'Pao', status: 'confirmed', date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0] },
    { id: 7, student: 'Valentina Torres', service: 'Eyelash Extensions', time: '1:00 PM - 3:00 PM', location: 'Polanco', instructor: 'Maggy', status: 'confirmed', date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0] },
    { id: 8, student: 'Camila Reyes', service: 'Henna Eyebrows', time: '3:00 PM - 5:00 PM', location: 'Ciudad Brisas', instructor: 'Ashley', status: 'pending', date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0] },
    
    // Day after tomorrow
    { id: 9, student: 'Daniela Morales', service: 'Advanced Microblading', time: '10:00 AM - 1:00 PM', location: 'Polanco', instructor: 'Fer', status: 'confirmed', date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] },
    { id: 10, student: 'Natalia Vargas', service: 'Volume Lashes', time: '1:00 PM - 3:00 PM', location: 'Pedregal', instructor: 'Pao', status: 'confirmed', date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] },
    
    // Next week
    { id: 11, student: 'Alejandra Silva', service: 'Microblading', time: '10:00 AM - 1:00 PM', location: 'Ciudad Brisas', instructor: 'Maggy', status: 'confirmed', date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] },
    { id: 12, student: 'Fernanda Castro', service: 'Eyelash Extensions', time: '3:00 PM - 5:00 PM', location: 'Polanco', instructor: 'Ashley', status: 'pending', date: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] },
    { id: 13, student: 'Gabriela Mendoza', service: 'Henna Eyebrows', time: '5:00 PM - 8:00 PM', location: 'Pedregal', instructor: 'Fer', status: 'confirmed', date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] }
  ]);

  const [newAppointment, setNewAppointment] = useState({
    date: new Date().toISOString().split('T')[0],
    location: null,
    timeSlot: null,
    student: null,
    isNewStudent: false,
    service: null
  });

  const [newStudentForAppointment, setNewStudentForAppointment] = useState({
    name: '',
    phone: '',
    email: '',
    program: ''
  });

  const [appointmentConfirmation, setAppointmentConfirmation] = useState(null);

  const [newStudent, setNewStudent] = useState({
    name: '',
    phone: '',
    email: '',
    program: ''
  });

  // Statistics calculations
  const todayStats = {
    totalStudents: students.length,
    todayClasses: appointments.filter(apt => apt.date === new Date().toISOString().split('T')[0]).length,
    monthlyRevenue: 185000,
    satisfactionRate: 89
  };

  const defaultReceiptCatalog = [
    { id: 1, name: 'Microblading Course', price: 2500, category: 'Courses' },
    { id: 2, name: 'Eyelash Extensions Course', price: 2200, category: 'Courses' },
    { id: 3, name: 'Registration Fee', price: 500, category: 'Fees' },
    { id: 4, name: 'Materials Kit', price: 450, category: 'Materials' },
    { id: 5, name: 'Certificate Fee', price: 200, category: 'Fees' }
  ];

  const [catalogItems, setCatalogItems] = useState(defaultReceiptCatalog);

  // Available time slots
  const getAvailableTimeSlots = (dayOfWeek) => {
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      return [
        { id: 1, time: '10:00 AM - 1:00 PM', duration: '3 hours' },
        { id: 2, time: '1:00 PM - 3:00 PM', duration: '2 hours' },
        { id: 3, time: '3:00 PM - 5:00 PM', duration: '2 hours' },
        { id: 4, time: '5:00 PM - 8:00 PM', duration: '3 hours' }
      ];
    } else if (dayOfWeek === 6) {
      return [
        { id: 1, time: '10:00 AM - 1:00 PM', duration: '3 hours' },
        { id: 2, time: '1:00 PM - 3:00 PM', duration: '2 hours' }
      ];
    }
    return [];
  };

  // Helper function to get date range starting from a specific date
  const getDateRange = (days, startDate = null) => {
    const today = startDate ? new Date(startDate) : new Date();
    const dates = [];
    for (let i = 0; i < days; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
  };

  // Navigate calendar dates
  const navigateCalendar = (direction) => {
    const currentDate = new Date(calendarStartDate);
    const daysToMove = direction === 'prev' ? -calendarDays : calendarDays;
    currentDate.setDate(currentDate.getDate() + daysToMove);
    setCalendarStartDate(currentDate.toISOString().split('T')[0]);
  };

  // Jump to today
  const goToToday = () => {
    setCalendarStartDate(new Date().toISOString().split('T')[0]);
  };

  // Jump to specific date
  const jumpToDate = (date) => {
    setCalendarStartDate(date);
    setShowDatePicker(false);
  };

  // Get calendar period description
  const getCalendarPeriodDescription = () => {
    const startDate = new Date(calendarStartDate);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + calendarDays - 1);
    
    const isToday = calendarStartDate === new Date().toISOString().split('T')[0];
    
    if (calendarDays === 1) {
      if (isToday) return "Today";
      return startDate.toLocaleDateString('en-US', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
      });
    }
    
    if (isToday && calendarDays <= 7) {
      return `Next ${calendarDays} days`;
    }
    
    return `${startDate.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    })} - ${endDate.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    })}`;
  };

  // Filter appointments by date range
  const getAppointmentsInRange = (days, startDate = null) => {
    const dateRange = getDateRange(days, startDate);
    return appointments.filter(apt => dateRange.includes(apt.date));
  };

  // Get all possible time slots for a given date
  const getAllTimeSlots = (date) => {
    const dateObj = new Date(date);
    const dayOfWeek = dateObj.getDay();
    return getAvailableTimeSlots(dayOfWeek);
  };

  // Get availability for all locations and time slots for a given date
  const getDateAvailability = (date) => {
    const timeSlots = getAllTimeSlots(date);
    const availability = {};
    
    locations.forEach(location => {
      availability[location.name] = {};
      timeSlots.forEach(slot => {
        const capacity = checkCapacity(date, location.name, slot.time);
        const availableInstructors = getAvailableInstructors(date, location.name, slot.time);
        
        availability[location.name][slot.time] = {
          ...capacity,
          hasInstructor: availableInstructors.length > 0,
          availableInstructors,
          canBook: capacity.canAddStudent && availableInstructors.length > 0
        };
      });
    });
    
    return availability;
  };

  // Quick book function
  const quickBook = (date, location, timeSlot) => {
    setNewAppointment({
      student: null,
      service: null,
      location: locations.find(loc => loc.name === location),
      timeSlot: timeSlot,
      date: date
    });
    setCurrentPage('new-appointment');
  };

  // Check capacity constraints
  const checkCapacity = (date, location, timeSlot, instructor = null) => {
    const existingAppointments = appointments.filter(apt => 
      apt.date === date && 
      apt.location === location && 
      apt.time === timeSlot
    );
    
    const studentCount = existingAppointments.length;
    const instructors = [...new Set(existingAppointments.map(apt => apt.instructor))];
    
    return {
      canAddStudent: studentCount < 4,
      canAddInstructor: instructors.length === 0 || (instructor && instructors.includes(instructor)),
      currentStudents: studentCount,
      maxStudents: 4,
      currentInstructors: instructors,
      availableSpots: 4 - studentCount
    };
  };

  // Get available instructors for a time slot
  const getAvailableInstructors = (date, location, timeSlot) => {
    const existingAppointments = appointments.filter(apt => 
      apt.date === date && 
      apt.time === timeSlot
    );
    
    // Get instructors already assigned to this time slot at any location
    const busyInstructors = [...new Set(existingAppointments.map(apt => apt.instructor))];
    
    // Get instructor already assigned to this specific location/time (if any)
    const locationInstructor = existingAppointments.find(apt => apt.location === location)?.instructor;
    
    if (locationInstructor) {
      // If someone is already assigned to this location/time, only they can take more students
      return teachers.filter(teacher => teacher.name === locationInstructor);
    } else {
      // Otherwise, show available instructors (not busy at this time)
      return teachers.filter(teacher => !busyInstructors.includes(teacher.name));
    }
  };

  // Generate WhatsApp share message for location
  const generateWhatsAppMessage = (date, location, dayAppointments) => {
    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString('es-ES', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long',
      year: 'numeric'
    });
    
    let message = `🏛️ *MAXFRA - ${location}*\n`;
    message += `📅 *${formattedDate}*\n\n`;
    message += `📋 *Horarios del día:*\n\n`;
    
    // Group by time slot
    const appointmentsByTime = dayAppointments.reduce((acc, apt) => {
      if (!acc[apt.time]) {
        acc[apt.time] = [];
      }
      acc[apt.time].push(apt);
      return acc;
    }, {});
    
    Object.keys(appointmentsByTime).sort().forEach((timeSlot, index) => {
      const timeAppointments = appointmentsByTime[timeSlot];
      const capacity = checkCapacity(date, location, timeSlot);
      
      message += `⏰ *${timeSlot}*\n`;
      message += `👩‍🏫 Instructor: ${timeAppointments[0].instructor}\n`;
      message += `👥 Estudiantes (${capacity.currentStudents}/${capacity.maxStudents}):\n`;
      
      timeAppointments.forEach((apt, i) => {
        const statusEmoji = apt.status === 'confirmed' ? '✅' : '⏳';
        message += `   ${i + 1}. ${statusEmoji} ${apt.student} - ${apt.service}\n`;
      });
      
      if (capacity.availableSpots > 0) {
        message += `   💡 ${capacity.availableSpots} cupo${capacity.availableSpots > 1 ? 's' : ''} disponible${capacity.availableSpots > 1 ? 's' : ''}\n`;
      }
      message += `\n`;
    });
    
    const locationData = locations.find(loc => loc.name === location);
    if (locationData) {
      message += `📍 *Ubicación:* ${location}\n`;
      message += `📧 Manager: ${locationData.manager}\n`;
      message += `📞 ${locationData.phone}\n`;
      message += `🏠 ${locationData.address}\n`;
    }
    
    message += `\n✨ *MAXFRA Beauty Academy* ✨`;
    
    return encodeURIComponent(message);
  };

  // Share via WhatsApp
  const shareOnWhatsApp = (date, location, dayAppointments) => {
    const message = generateWhatsAppMessage(date, location, dayAppointments);
    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const isLocationOpen = (dayOfWeek) => dayOfWeek >= 1 && dayOfWeek <= 6;

  const updateCatalogItemPrice = (id, price) => {
    setCatalogItems(catalogItems.map(item =>
      item.id === id ? { ...item, price: parseFloat(price) || 0 } : item
    ));
  };

  const addReceiptItem = (item) => {
    const newItem = {
      id: Date.now() + Math.random(),
      name: item.name,
      price: parseFloat(item.price) || 0,
      quantity: 1,
      category: item.category || 'Custom'
    };
    setReceiptItems([...receiptItems, newItem]);
  };

  const addCustomItem = () => {
    if (!customItem.name || !customItem.price) {
      alert('Please enter item name and price');
      return;
    }
    
    const newItem = {
      id: Date.now() + Math.random(),
      name: customItem.name,
      price: parseFloat(customItem.price),
      quantity: parseInt(customItem.quantity) || 1,
      category: 'Custom'
    };
    
    setReceiptItems([...receiptItems, newItem]);
    setCustomItem({ name: '', price: '', quantity: 1 });
    setShowCustomItemForm(false);
  };

  const updateItemQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeReceiptItem(id);
    } else {
      setReceiptItems(receiptItems.map(item => 
        item.id === id ? { ...item, quantity: parseInt(newQuantity) || 1 } : item
      ));
    }
  };

  const updateItemPrice = (id, newPrice) => {
    setReceiptItems(receiptItems.map(item => 
      item.id === id ? { ...item, price: parseFloat(newPrice) || 0 } : item
    ));
  };

  const removeReceiptItem = (id) => {
    setReceiptItems(receiptItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return receiptItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const generateReceipt = () => {
    if (!selectedStudent || receiptItems.length === 0) return;
    
    // Create receipt image
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size (typical thermal receipt width)
    canvas.width = 300;
    canvas.height = 400 + (receiptItems.length * 30);
    
    // White background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Set default font
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'center';
    
    let y = 20;
    
    // Header
    ctx.font = 'bold 16px Arial';
    ctx.fillText('MAXFRA BEAUTY ACADEMY', canvas.width / 2, y);
    y += 20;
    
    ctx.font = '12px Arial';
    ctx.fillText('RECIBO DE PAGO', canvas.width / 2, y);
    y += 25;
    
    // Student info
    ctx.textAlign = 'left';
    ctx.font = '11px Arial';
    ctx.fillText(`Cliente: ${selectedStudent.name}`, 10, y);
    y += 15;
    ctx.fillText(`Teléfono: ${selectedStudent.phone}`, 10, y);
    y += 15;
    ctx.fillText(`Programa: ${selectedStudent.program}`, 10, y);
    y += 20;
    
    // Date and receipt number
    const now = new Date();
    const receiptNumber = `REC-${Date.now().toString().slice(-6)}`;
    ctx.fillText(`Fecha: ${now.toLocaleDateString('es-MX')}`, 10, y);
    y += 15;
    ctx.fillText(`Hora: ${now.toLocaleTimeString('es-MX', { hour12: false })}`, 10, y);
    y += 15;
    ctx.fillText(`Recibo #: ${receiptNumber}`, 10, y);
    y += 25;
    
    // Separator line
    ctx.beginPath();
    ctx.moveTo(10, y);
    ctx.lineTo(canvas.width - 10, y);
    ctx.stroke();
    y += 15;
    
    // Items header
    ctx.font = 'bold 11px Arial';
    ctx.fillText('CONCEPTO', 10, y);
    ctx.textAlign = 'right';
    ctx.fillText('PRECIO', canvas.width - 10, y);
    y += 15;
    
    // Separator line
    ctx.textAlign = 'left';
    ctx.beginPath();
    ctx.moveTo(10, y);
    ctx.lineTo(canvas.width - 10, y);
    ctx.stroke();
    y += 15;
    
    // Receipt items
    ctx.font = '10px Arial';
    receiptItems.forEach(item => {
      const itemTotal = item.price * item.quantity;
      
      // Item name and quantity
      ctx.textAlign = 'left';
      ctx.fillText(`${item.name}`, 10, y);
      y += 12;
      ctx.fillText(`  Cant: ${item.quantity} x ${item.price}`, 10, y);
      
      // Item total
      ctx.textAlign = 'right';
      ctx.fillText(`${itemTotal.toLocaleString()}`, canvas.width - 10, y);
      y += 18;
    });
    
    y += 10;
    
    // Separator line
    ctx.beginPath();
    ctx.moveTo(10, y);
    ctx.lineTo(canvas.width - 10, y);
    ctx.stroke();
    y += 20;
    
    // Total
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('TOTAL:', 10, y);
    ctx.textAlign = 'right';
    ctx.fillText(`${calculateTotal().toLocaleString()} MXN`, canvas.width - 10, y);
    y += 25;
    
    // Payment method
    ctx.font = '10px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Forma de Pago: Efectivo/Tarjeta', 10, y);
    y += 25;
    
    // Footer
    ctx.textAlign = 'center';
    ctx.fillText('¡GRACIAS POR TU CONFIANZA!', canvas.width / 2, y);
    y += 15;
    ctx.fillText('MAXFRA Beauty Academy', canvas.width / 2, y);
    y += 12;
    ctx.fillText('📞 55-77-51-69-13', canvas.width / 2, y);
    y += 12;
    ctx.fillText('✨ Donde los sueños se vuelven realidad ✨', canvas.width / 2, y);
    
    // Convert to image and share
    const imageDataUrl = canvas.toDataURL('image/png');
    
    // Create a temporary link to download or share
    const link = document.createElement('a');
    link.download = `MAXFRA_Recibo_${receiptNumber}.png`;
    link.href = imageDataUrl;
    
    // For mobile sharing
    if (navigator.share && navigator.canShare) {
      canvas.toBlob(blob => {
        const file = new File([blob], `MAXFRA_Recibo_${receiptNumber}.png`, { type: 'image/png' });
        navigator.share({
          title: 'Recibo MAXFRA',
          text: `Recibo de pago - ${selectedStudent.name}`,
          files: [file]
        });
      });
    } else {
      // Fallback: show image in new window for saving/sharing
      const newWindow = window.open();
      newWindow.document.write(`
        <html>
          <head><title>Recibo MAXFRA - ${receiptNumber}</title></head>
          <body style="margin:0; padding:20px; text-align:center; background:#f5f5f5;">
            <h2>Recibo Generado</h2>
            <img src="${imageDataUrl}" style="max-width:100%; border:1px solid #ccc; background:white;">
            <br><br>
            <button onclick="window.print()" style="padding:10px 20px; background:#4CAF50; color:white; border:none; border-radius:5px; cursor:pointer;">
              🖨️ Imprimir
            </button>
            <br><br>
            <p>Haga clic derecho en la imagen para guardar o compartir</p>
          </body>
        </html>
      `);
    }
    
    // Clear receipt
    setReceiptItems([]);
    setSelectedStudent(null);
    alert(`Recibo generado exitosamente!\n\nRecibo #: ${receiptNumber}\nCliente: ${selectedStudent.name}\nTotal: ${calculateTotal().toLocaleString()} MXN`);
    setCurrentPage('main');
  };

  const addStudent = () => {
    if (!newStudent.name || !newStudent.phone || !newStudent.program) {
      alert('Please fill in all required fields');
      return;
    }
    
    const student = {
      id: Date.now(),
      ...newStudent,
      progress: 0,
      status: 'Active'
    };
    
    setStudents([...students, student]);
    setNewStudent({ name: '', phone: '', email: '', program: '' });
    alert(`Student ${student.name} added successfully!`);
    setCurrentPage('main');
  };

  const createAppointment = () => {
    // Validate required fields
    if (!newAppointment.date || !newAppointment.location || !newAppointment.timeSlot || !newAppointment.service) {
      alert('Please fill in date, location, time slot, and service');
      return;
    }

    // Handle student validation
    let studentData = null;
    if (newAppointment.isNewStudent) {
      if (!newStudentForAppointment.name || !newStudentForAppointment.phone) {
        alert('Please fill in student name and phone for new student');
        return;
      }
      
      // Create new student
      const newStudentId = Date.now() + Math.random();
      studentData = {
        id: newStudentId,
        ...newStudentForAppointment,
        progress: 0,
        status: 'Active',
        program: newAppointment.service.name
      };
      setStudents([...students, studentData]);
    } else {
      if (!newAppointment.student) {
        alert('Please select a student');
        return;
      }
      studentData = newAppointment.student;
    }

    // Check capacity constraints
    const capacity = checkCapacity(newAppointment.date, newAppointment.location.name, newAppointment.timeSlot);
    
    if (!capacity.canAddStudent) {
      alert(`Cannot add appointment: Time slot is full (${capacity.maxStudents}/${capacity.maxStudents} students)`);
      return;
    }

    // Get available instructors for this slot
    const availableInstructors = getAvailableInstructors(newAppointment.date, newAppointment.location.name, newAppointment.timeSlot);
    
    if (availableInstructors.length === 0) {
      alert('No instructors available for this time slot');
      return;
    }

    // Assign instructor (use existing one for the slot, or first available)
    const assignedInstructor = capacity.currentInstructors.length > 0 
      ? capacity.currentInstructors[0] 
      : availableInstructors[0].name;

    // Generate booking ID
    const bookingId = `MAXFRA-${Date.now().toString().slice(-6)}`;

    const appointment = {
      id: Date.now(),
      bookingId: bookingId,
      student: studentData.name,
      service: newAppointment.service.name,
      time: newAppointment.timeSlot,
      location: newAppointment.location.name,
      instructor: assignedInstructor,
      status: 'confirmed',
      date: newAppointment.date
    };

    setAppointments([...appointments, appointment]);
    
    // Show confirmation
    const confirmationData = {
      ...appointment,
      serviceType: newAppointment.service.type,
      locationData: newAppointment.location,
      studentPhone: studentData.phone,
      serviceCategory: newAppointment.service.category
    };
    
    setAppointmentConfirmation(confirmationData);
    
    // Reset forms
    setNewAppointment({
      date: new Date().toISOString().split('T')[0],
      location: null,
      timeSlot: null,
      student: null,
      isNewStudent: false,
      service: null
    });
    setNewStudentForAppointment({
      name: '',
      phone: '',
      email: '',
      program: ''
    });
  };

  // Generate WhatsApp confirmation message in Spanish
  const generateConfirmationWhatsApp = (confirmation) => {
    const dateObj = new Date(confirmation.date);
    const formattedDate = dateObj.toLocaleDateString('es-MX', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long',
      year: 'numeric'
    });
    
    // Convert time to Mexican format (24h)
    const timeStart = confirmation.time.split(' - ')[0];
    const timeEnd = confirmation.time.split(' - ')[1];
    
    const convertTo24h = (time12h) => {
      const [time, modifier] = time12h.split(' ');
      let [hours, minutes] = time.split(':');
      let hourNum = parseInt(hours, 10);
      if (hourNum === 12) hourNum = 0;
      if (modifier === 'PM') hourNum = hourNum + 12;
      return `${hourNum.toString().padStart(2, '0')}:${minutes}`;
    };
    
    const timeStartMX = convertTo24h(timeStart);
    const timeEndMX = convertTo24h(timeEnd);
    
    const serviceEmoji = confirmation.serviceType === 'Course' ? '🎓' : 
                        confirmation.serviceType === 'Service' ? '✨' : 'ℹ️';
    
    let message = `🌟 *CONFIRMACIÓN DE CITA - MAXFRA* 🌟\n\n`;
    message += `👤 *Estudiante:* ${confirmation.student}\n`;
    message += `📅 *Fecha:* ${formattedDate}\n`;
    message += `⏰ *Horario:* ${timeStartMX} - ${timeEndMX} hrs\n`;
    message += `${serviceEmoji} *${confirmation.serviceType}:* ${confirmation.service}\n`;
    message += `👩‍🏫 *Instructor(a):* ${confirmation.instructor}\n`;
    message += `📍 *Sucursal:* ${confirmation.location}\n`;
    message += `🏠 *Dirección:* ${confirmation.locationData.address}\n`;
    message += `🆔 *Número de Reserva:* ${confirmation.bookingId}\n\n`;
    message += `📞 *¿Preguntas? Llámanos:* 55-77-51-69-13\n\n`;
    message += `✨ *¡Te esperamos en MAXFRA Beauty Academy!* ✨\n`;
    message += `💄 *Donde los sueños se vuelven realidad* 💄`;
    
    return encodeURIComponent(message);
  };

  const deleteAppointment = (id) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      setAppointments(appointments.filter(apt => apt.id !== id));
    }
  };

  const generateDiploma = (student) => {
    alert(`Diploma generated for ${student.name}!\n\nProgram: ${student.program}\nReady for printing and email delivery.`);
  };

  // Header Component
  const Header = () => (
    <div className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {currentPage !== 'main' && (
            <button 
              onClick={() => setCurrentPage('main')}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold">M</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">MAXFRA</h1>
            <p className="text-xs text-gray-500">Director Dashboard</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-lg hover:bg-gray-100 relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              {appointments.filter(apt => apt.status === 'pending').length}
            </span>
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <Search className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );

  // Dashboard View
  const Dashboard = () => (
    <div className="p-4 pb-20">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Students</p>
              <p className="text-2xl font-bold text-blue-600">{todayStats.totalStudents}</p>
            </div>
            <Users className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Today's Classes</p>
              <p className="text-2xl font-bold text-green-600">{todayStats.todayClasses}</p>
            </div>
            <Calendar className="w-8 h-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Monthly Revenue</p>
              <p className="text-xl font-bold text-purple-600">${todayStats.monthlyRevenue.toLocaleString()}</p>
            </div>
            <TrendingUp className="w-8 h-8 text-purple-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Satisfaction</p>
              <p className="text-2xl font-bold text-orange-600">{todayStats.satisfactionRate}%</p>
            </div>
            <Star className="w-8 h-8 text-orange-600" />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <button 
            onClick={() => setCurrentPage('calendar')}
            className="bg-blue-500 text-white p-4 rounded-xl flex flex-col items-center hover:bg-blue-600 transition-colors shadow-lg"
          >
            <Calendar className="w-6 h-6 mb-2" />
            <span className="text-sm font-medium">Calendar</span>
          </button>
          
          <button 
            onClick={() => setCurrentPage('new-appointment')}
            className="bg-green-500 text-white p-4 rounded-xl flex flex-col items-center hover:bg-green-600 transition-colors shadow-lg"
          >
            <Plus className="w-6 h-6 mb-2" />
            <span className="text-sm font-medium">New Appointment</span>
          </button>
          
          <button 
            onClick={() => setCurrentPage('new-student')}
            className="bg-purple-500 text-white p-4 rounded-xl flex flex-col items-center hover:bg-purple-600 transition-colors shadow-lg"
          >
            <User className="w-6 h-6 mb-2" />
            <span className="text-sm font-medium">Add Student</span>
          </button>
          
          <button 
            onClick={() => setCurrentPage('receipt')}
            className="bg-orange-500 text-white p-4 rounded-xl flex flex-col items-center hover:bg-orange-600 transition-colors shadow-lg"
          >
            <Receipt className="w-6 h-6 mb-2" />
            <span className="text-sm font-medium">Create Receipt</span>
          </button>
        </div>
      </div>

      {/* Additional Actions */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button 
          onClick={() => setCurrentPage('diploma')}
          className="bg-pink-500 text-white p-3 rounded-xl flex items-center justify-center hover:bg-pink-600 transition-colors shadow-lg"
        >
          <Award className="w-5 h-5 mr-2" />
          <span className="text-sm font-medium">Generate Diploma</span>
        </button>
        
        <button 
          onClick={() => setCurrentPage('students')}
          className="bg-indigo-500 text-white p-3 rounded-xl flex items-center justify-center hover:bg-indigo-600 transition-colors shadow-lg"
        >
          <Users className="w-5 h-5 mr-2" />
          <span className="text-sm font-medium">View Students</span>
        </button>
      </div>

      {/* Today's Schedule */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Today's Schedule</h3>
          <button 
            onClick={() => setCurrentPage('calendar')}
            className="text-blue-600 text-sm font-medium"
          >
            View All
          </button>
        </div>
        <div className="space-y-3">
          {appointments.filter(apt => apt.date === new Date().toISOString().split('T')[0]).map((appointment) => (
            <div key={appointment.id} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-gray-900">{appointment.student}</h4>
                  <p className="text-sm text-gray-600">{appointment.service}</p>
                  <p className="text-xs text-gray-500">{appointment.instructor} • {appointment.location}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{appointment.time}</p>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    appointment.status === 'confirmed' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {appointment.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Calendar View
  const CalendarView = () => {
    // Helper function to get date range
    const getDateRange = (days) => {
      const today = new Date();
      const dates = [];
      for (let i = 0; i < days; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        dates.push(date.toISOString().split('T')[0]);
      }
      return dates;
    };

    // Filter appointments by date range
    const getAppointmentsInRange = (days) => {
      const dateRange = getDateRange(days);
      return appointments.filter(apt => dateRange.includes(apt.date));
    };

    const appointmentsInRange = getAppointmentsInRange(calendarDays);
    const dateRange = getDateRange(calendarDays);
    
    // Format date for display
    const formatDateDisplay = (dateString) => {
      const date = new Date(dateString);
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      
      if (dateString === today.toISOString().split('T')[0]) {
        return 'Today';
      } else if (dateString === tomorrow.toISOString().split('T')[0]) {
        return 'Tomorrow';
      } else {
        return date.toLocaleDateString('en-US', { 
          weekday: 'short', 
          month: 'short', 
          day: 'numeric' 
        });
      }
    };
    
    // Group appointments by date
    const appointmentsByDate = appointmentsInRange.reduce((acc, apt) => {
      if (!acc[apt.date]) {
        acc[apt.date] = [];
      }
      acc[apt.date].push(apt);
      return acc;
    }, {});

    return (
      <div className="p-4 pb-20">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Calendar</h2>
          <button 
            onClick={() => setCurrentPage('new-appointment')}
            className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg"
          >
            <Plus className="w-4 h-4 inline mr-1" />
            New
          </button>
        </div>

        {/* Calendar View Options */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">View Period</h3>
          <div className="flex flex-wrap gap-2">
            {[1, 3, 7, 10, 14, 30].map((days) => (
              <button
                key={days}
                onClick={() => setCalendarDays(days)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  calendarDays === days
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {days === 1 ? 'Today' : `${days} Days`}
              </button>
            ))}
          </div>
        </div>

        {/* Calendar Summary */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-6 border border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {calendarDays === 1 ? 'Today\'s Schedule' : `Next ${calendarDays} Days`}
              </h3>
              <p className="text-sm text-gray-600">
                {appointmentsInRange.length} appointment{appointmentsInRange.length !== 1 ? 's' : ''} scheduled
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-blue-600">{appointmentsInRange.length}</p>
              <p className="text-xs text-gray-500">Total</p>
            </div>
          </div>
        </div>

        {/* Appointments by Date */}
        <div className="space-y-4">
          {dateRange.map((date) => {
            const dayAppointments = appointmentsByDate[date] || [];
            const dateObj = new Date(date);
            const dayOfWeek = dateObj.getDay();
            const isOpen = isLocationOpen(dayOfWeek);
            const availability = getDateAvailability(date);
            
            // Group appointments by location and sort by location name
            const appointmentsByLocation = dayAppointments.reduce((acc, apt) => {
              if (!acc[apt.location]) {
                acc[apt.location] = [];
              }
              acc[apt.location].push(apt);
              return acc;
            }, {});
            
            // Sort appointments within each location by time
            Object.keys(appointmentsByLocation).forEach(location => {
              appointmentsByLocation[location].sort((a, b) => {
                const timeA = a.time.split(' ')[0];
                const timeB = b.time.split(' ')[0];
                return timeA.localeCompare(timeB);
              });
            });
            
            const sortedLocations = Object.keys(appointmentsByLocation).sort();
            
            // Get total available spots for the day
            const totalAvailableSpots = Object.values(availability).reduce((total, locationAvail) => {
              return total + Object.values(locationAvail).reduce((locTotal, slot) => {
                return locTotal + (slot.canBook ? slot.availableSpots : 0);
              }, 0);
            }, 0);
            
            return (
              <div key={date} className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="p-4 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {formatDateDisplay(date)}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {dateObj.toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          month: 'long', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        isOpen 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {isOpen ? 'Open' : 'Closed'}
                      </span>
                      <p className="text-sm text-gray-600 mt-1">
                        {dayAppointments.length} appointment{dayAppointments.length !== 1 ? 's' : ''}
                      </p>
                      {isOpen && totalAvailableSpots > 0 && (
                        <p className="text-xs text-green-600 font-medium">
                          💡 {totalAvailableSpots} spots available
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                
                {isOpen ? (
                  <div className="p-4 space-y-4">
                    {/* Show all locations, even if no appointments */}
                    {locations.map((location) => {
                      const locationAppointments = appointmentsByLocation[location.name] || [];
                      const locationAvailability = availability[location.name];
                      const locationAvailableSpots = Object.values(locationAvailability).reduce((total, slot) => {
                        return total + (slot.canBook ? slot.availableSpots : 0);
                      }, 0);
                      
                      return (
                        <div key={location.name} className="border border-gray-100 rounded-lg p-3 bg-gray-50">
                          <div className="flex justify-between items-center mb-3">
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4 text-purple-600" />
                              <h5 className="font-semibold text-gray-900">{location.name}</h5>
                              <span className="text-xs text-gray-500">
                                ({locationAppointments.length} appointment{locationAppointments.length !== 1 ? 's' : ''})
                              </span>
                              {locationAvailableSpots > 0 && (
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                                  {locationAvailableSpots} available
                                </span>
                              )}
                            </div>
                            <button
                              onClick={() => shareOnWhatsApp(date, location.name, locationAppointments)}
                              className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-medium flex items-center space-x-1 transition-colors"
                              title="Share on WhatsApp"
                            >
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                              </svg>
                              <span>Share</span>
                            </button>
                          </div>
                          
                          <div className="text-xs text-gray-500 mb-3">
                            📞 {location.phone} • 👤 {location.manager}
                          </div>
                          
                          {/* Show all time slots for this location */}
                          <div className="space-y-2">
                            {getAllTimeSlots(date).map((timeSlot) => {
                              const timeAppointments = locationAppointments.filter(apt => apt.time === timeSlot.time);
                              const slotAvailability = locationAvailability[timeSlot.time];
                              
                              if (timeAppointments.length > 0) {
                                // Show existing appointments for this time slot
                                const capacity = checkCapacity(date, location.name, timeSlot.time);
                                
                                return (
                                  <div key={timeSlot.time} className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                                    <div className="flex justify-between items-center mb-2">
                                      <h6 className="font-semibold text-gray-900">⏰ {timeSlot.time}</h6>
                                      <div className="flex items-center space-x-2">
                                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                                          👩‍🏫 {timeAppointments[0].instructor}
                                        </span>
                                        <span className={`text-xs px-2 py-1 rounded-full ${
                                          capacity.availableSpots > 0 
                                            ? 'bg-green-100 text-green-700' 
                                            : 'bg-red-100 text-red-700'
                                        }`}>
                                          {capacity.currentStudents}/{capacity.maxStudents} students
                                        </span>
                                      </div>
                                    </div>
                                    
                                    <div className="space-y-2">
                                      {timeAppointments.map((appointment) => (
                                        <div key={appointment.id} className="bg-white rounded-lg p-2 border border-gray-200">
                                          <div className="flex justify-between items-start">
                                            <div>
                                              <h7 className="font-medium text-gray-900 text-sm">{appointment.student}</h7>
                                              <p className="text-xs text-gray-600">{appointment.service}</p>
                                            </div>
                                            <div className="text-right">
                                              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                                appointment.status === 'confirmed' 
                                                  ? 'bg-green-100 text-green-700' 
                                                  : 'bg-yellow-100 text-yellow-700'
                                              }`}>
                                                {appointment.status}
                                              </span>
                                            </div>
                                          </div>
                                          <div className="flex space-x-2 mt-2">
                                            <button className="flex-1 bg-blue-50 text-blue-700 py-1 rounded text-xs font-medium hover:bg-blue-100 transition-colors">
                                              Edit
                                            </button>
                                            <button 
                                              onClick={() => deleteAppointment(appointment.id)}
                                              className="flex-1 bg-red-50 text-red-700 py-1 rounded text-xs font-medium hover:bg-red-100 transition-colors"
                                            >
                                              Delete
                                            </button>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                    
                                    {capacity.availableSpots > 0 && slotAvailability.canBook && (
                                      <div className="mt-2 p-2 bg-green-50 rounded border border-green-200">
                                        <div className="flex justify-between items-center">
                                          <p className="text-xs text-green-700 font-medium">
                                            💡 {capacity.availableSpots} spot{capacity.availableSpots > 1 ? 's' : ''} available
                                          </p>
                                          <button
                                            onClick={() => quickBook(date, location.name, timeSlot.time)}
                                            className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded text-xs font-medium transition-colors"
                                          >
                                            + Book
                                          </button>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                );
                              } else if (slotAvailability.canBook) {
                                // Show available time slot with no appointments
                                return (
                                  <div key={timeSlot.time} className="bg-green-50 rounded-lg p-3 border border-green-200">
                                    <div className="flex justify-between items-center">
                                      <div>
                                        <h6 className="font-medium text-gray-900">⏰ {timeSlot.time}</h6>
                                        <p className="text-xs text-green-600">
                                          ✨ Available - {slotAvailability.availableSpots}/4 spots open
                                        </p>
                                        {slotAvailability.availableInstructors.length > 0 && (
                                          <p className="text-xs text-gray-500">
                                            👩‍🏫 Instructors available: {slotAvailability.availableInstructors.map(t => t.name).join(', ')}
                                          </p>
                                        )}
                                      </div>
                                      <button
                                        onClick={() => quickBook(date, location.name, timeSlot.time)}
                                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                                      >
                                        + Book Now
                                      </button>
                                    </div>
                                  </div>
                                );
                              } else if (!slotAvailability.hasInstructor) {
                                // Show unavailable slot due to no instructor
                                return (
                                  <div key={timeSlot.time} className="bg-red-50 rounded-lg p-3 border border-red-200">
                                    <div className="flex justify-between items-center">
                                      <div>
                                        <h6 className="font-medium text-gray-600">⏰ {timeSlot.time}</h6>
                                        <p className="text-xs text-red-600">❌ No instructor available</p>
                                      </div>
                                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                                        Unavailable
                                      </span>
                                    </div>
                                  </div>
                                );
                              }
                              return null;
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="p-4 text-center text-gray-500">
                    <Calendar className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Location closed on Sundays</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // New Appointment Form
  const NewAppointmentForm = () => {
    // Get available time slots based on selected date and location
    const getAvailableTimeSlotsForLocation = () => {
      if (!newAppointment.date || !newAppointment.location) return [];
      
      const selectedDateObj = new Date(newAppointment.date);
      const dayOfWeek = selectedDateObj.getDay();
      const allSlots = getAvailableTimeSlots(dayOfWeek);
      
      // Filter slots based on capacity and instructor availability
      return allSlots.filter(slot => {
        const capacity = checkCapacity(newAppointment.date, newAppointment.location.name, slot.time);
        const availableInstructors = getAvailableInstructors(newAppointment.date, newAppointment.location.name, slot.time);
        return capacity.canAddStudent && availableInstructors.length > 0;
      });
    };

    const availableSlots = getAvailableTimeSlotsForLocation();
    const isOpen = newAppointment.date ? isLocationOpen(new Date(newAppointment.date).getDay()) : true;
    
    return (
      <div className="p-4 pb-20">
        <h2 className="text-xl font-bold text-gray-900 mb-6">New Appointment</h2>
        
        <div className="space-y-6">
          {/* Step 1: Date Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              📅 Step 1: Select Date *
            </label>
            <input
              type="date"
              value={newAppointment.date}
              onChange={(e) => setNewAppointment({
                ...newAppointment, 
                date: e.target.value, 
                location: null, 
                timeSlot: null
              })}
              className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
              min={new Date().toISOString().split('T')[0]}
            />
            <div className="mt-2 p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Schedule:</strong> {isOpen ? 'Mon-Fri: 10AM-8PM | Sat: 10AM-3PM' : 'Closed on Sundays'}
              </p>
            </div>
          </div>

          {/* Step 2: Location Selection */}
          {newAppointment.date && isOpen && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                📍 Step 2: Select Location *
              </label>
              <div className="space-y-2">
                {locations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => setNewAppointment({
                      ...newAppointment, 
                      location, 
                      timeSlot: null
                    })}
                    className={`w-full p-3 text-left rounded-lg border transition-colors ${
                      newAppointment.location?.id === location.id
                        ? 'border-blue-300 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <h4 className="font-medium text-gray-900">{location.name}</h4>
                    <p className="text-sm text-gray-600">{location.address}</p>
                    <p className="text-xs text-gray-500">👤 {location.manager} • 📞 {location.phone}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Time Slot Selection */}
          {newAppointment.location && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ⏰ Step 3: Select Time Slot *
              </label>
              {availableSlots.length > 0 ? (
                <div className="space-y-2">
                  {availableSlots.map((slot) => {
                    const capacity = checkCapacity(newAppointment.date, newAppointment.location.name, slot.time);
                    const availableInstructors = getAvailableInstructors(newAppointment.date, newAppointment.location.name, slot.time);
                    
                    return (
                      <button
                        key={slot.id}
                        onClick={() => setNewAppointment({...newAppointment, timeSlot: slot.time})}
                        className={`w-full p-3 text-left rounded-lg border transition-colors ${
                          newAppointment.timeSlot === slot.time
                            ? 'border-blue-300 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium text-gray-900">{slot.time}</h4>
                            <p className="text-sm text-gray-600">Duration: {slot.duration}</p>
                            <p className="text-xs text-gray-500">
                              👩‍🏫 Available: {availableInstructors.map(t => t.name).join(', ')}
                            </p>
                          </div>
                          <div className="text-right">
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                              {capacity.availableSpots}/4 spots
                            </span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-red-700 text-sm">❌ No available time slots for this date and location</p>
                  <p className="text-red-600 text-xs mt-1">All slots are either full or no instructors available</p>
                </div>
              )}
            </div>
          )}

          {/* Step 4: Service Selection */}
          {newAppointment.timeSlot && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                💄 Step 4: Select Service *
              </label>
              <div className="space-y-4">
                {['Course', 'Service', 'Information'].map((type) => (
                  <div key={type}>
                    <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
                      {type === 'Course' && '🎓'}
                      {type === 'Service' && '✨'}
                      {type === 'Information' && 'ℹ️'}
                      <span className="ml-2">{type}s</span>
                    </h4>
                    <div className="space-y-2">
                      {services.filter(service => service.type === type).map((service) => (
                        <button
                          key={service.id}
                          onClick={() => setNewAppointment({...newAppointment, service})}
                          className={`w-full p-3 text-left rounded-lg border transition-colors ${
                            newAppointment.service?.id === service.id
                              ? 'border-blue-300 bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <h5 className="font-medium text-gray-900">{service.name}</h5>
                              <p className="text-sm text-gray-600">Duration: {service.duration}</p>
                            </div>
                            <div className="text-right">
                              <p className={`font-bold ${service.price === 0 ? 'text-green-600' : 'text-purple-600'}`}>
                                {service.price === 0 ? 'FREE' : `${service.price}`}
                              </p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Student Selection */}
          {newAppointment.service && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                👤 Step 5: Select Student *
              </label>
              
              {/* Student Type Selection */}
              <div className="mb-4 space-y-2">
                <button
                  onClick={() => setNewAppointment({...newAppointment, isNewStudent: false, student: null})}
                  className={`w-full p-3 text-left rounded-lg border transition-colors ${
                    !newAppointment.isNewStudent
                      ? 'border-blue-300 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <h4 className="font-medium text-gray-900">📚 Existing Student</h4>
                  <p className="text-sm text-gray-600">Select from current student database</p>
                </button>
                
                <button
                  onClick={() => setNewAppointment({...newAppointment, isNewStudent: true, student: null})}
                  className={`w-full p-3 text-left rounded-lg border transition-colors ${
                    newAppointment.isNewStudent
                      ? 'border-blue-300 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <h4 className="font-medium text-gray-900">✨ New Student</h4>
                  <p className="text-sm text-gray-600">Add a new student to the system</p>
                </button>
              </div>

              {/* Existing Student Selection */}
              {!newAppointment.isNewStudent && (
                <div className="space-y-2">
                  <p className="text-sm text-gray-600 mb-2">Select from existing students:</p>
                  {students.map((student) => (
                    <button
                      key={student.id}
                      onClick={() => setNewAppointment({...newAppointment, student})}
                      className={`w-full p-3 text-left rounded-lg border transition-colors ${
                        newAppointment.student?.id === student.id
                          ? 'border-blue-300 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <h5 className="font-medium text-gray-900">{student.name}</h5>
                      <p className="text-sm text-gray-600">{student.program}</p>
                      <p className="text-xs text-gray-500">{student.phone} • {student.email}</p>
                    </button>
                  ))}
                </div>
              )}

              {/* New Student Form */}
              {newAppointment.isNewStudent && (
                <div className="space-y-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-medium text-purple-900">New Student Information</h4>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      value={newStudentForAppointment.name}
                      onChange={(e) => setNewStudentForAppointment({...newStudentForAppointment, name: e.target.value})}
                      className="w-full p-2 border border-gray-200 rounded-lg focus:border-purple-300"
                      placeholder="Enter student name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <input
                      type="tel"
                      value={newStudentForAppointment.phone}
                      onChange={(e) => setNewStudentForAppointment({...newStudentForAppointment, phone: e.target.value})}
                      className="w-full p-2 border border-gray-200 rounded-lg focus:border-purple-300"
                      placeholder="+52 55 1234 5678"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={newStudentForAppointment.email}
                      onChange={(e) => setNewStudentForAppointment({...newStudentForAppointment, email: e.target.value})}
                      className="w-full p-2 border border-gray-200 rounded-lg focus:border-purple-300"
                      placeholder="student@email.com"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Create Appointment Button */}
          {((newAppointment.isNewStudent && newStudentForAppointment.name && newStudentForAppointment.phone) || 
            (!newAppointment.isNewStudent && newAppointment.student)) && 
           newAppointment.service && (
            <button 
              onClick={createAppointment}
              className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors shadow-lg"
            >
              📅 Book Appointment
            </button>
          )}
        </div>
      </div>
    );
  };

  // Appointment Confirmation Modal
  const AppointmentConfirmation = () => {
    if (!appointmentConfirmation) return null;

    console.log('Showing confirmation:', appointmentConfirmation);

    const dateObj = new Date(appointmentConfirmation.date);
    const formattedDate = dateObj.toLocaleDateString('es-MX', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long',
      year: 'numeric'
    });
    
    const timeStart = appointmentConfirmation.time.split(' - ')[0];
    const timeEnd = appointmentConfirmation.time.split(' - ')[1];
    
    const convertTo24h = (time12h) => {
      const [time, modifier] = time12h.split(' ');
      let [hours, minutes] = time.split(':');
      if (hours === '12') hours = '00';
      if (modifier === 'PM') hours = parseInt(hours, 10) + 12;
      return `${hours.padStart(2, '0')}:${minutes}`;
    };
    
    const timeStartMX = convertTo24h(timeStart);
    const timeEndMX = convertTo24h(timeEnd);

    const serviceEmoji = appointmentConfirmation.serviceType === 'Course' ? '🎓' : 
                        appointmentConfirmation.serviceType === 'Service' ? '✨' : 'ℹ️';

    const shareOnWhatsApp = () => {
      const message = generateConfirmationWhatsApp(appointmentConfirmation);
      const studentPhone = appointmentConfirmation.studentPhone?.replace(/[^0-9]/g, '') || '';
      const whatsappUrl = `https://wa.me/${studentPhone}?text=${message}`;
      window.open(whatsappUrl, '_blank');
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">¡Cita Confirmada!</h2>
            <p className="text-gray-600 mt-2">Appointment Successfully Booked</p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-gray-200">
              <div className="grid grid-cols-1 gap-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">👤 Estudiante:</span>
                  <span className="font-medium text-gray-900">{appointmentConfirmation.student}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">📅 Fecha:</span>
                  <span className="font-medium text-gray-900">{formattedDate}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">⏰ Horario:</span>
                  <span className="font-medium text-gray-900">{timeStartMX} - {timeEndMX} hrs</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">{serviceEmoji} {appointmentConfirmation.serviceType}:</span>
                  <span className="font-medium text-gray-900">{appointmentConfirmation.service}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">👩‍🏫 Instructor(a):</span>
                  <span className="font-medium text-gray-900">{appointmentConfirmation.instructor}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">📍 Sucursal:</span>
                  <span className="font-medium text-gray-900">{appointmentConfirmation.location}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">🏠 Dirección:</span>
                  <span className="font-medium text-gray-900 text-right">{appointmentConfirmation.locationData?.address}</span>
                </div>
                
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">🆔 Reserva:</span>
                    <span className="font-bold text-blue-600">{appointmentConfirmation.bookingId}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <p className="text-sm text-yellow-800">
                📞 <strong>¿Preguntas?</strong> Llámanos al 55-77-51-69-13
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={shareOnWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span>Compartir por WhatsApp</span>
            </button>

            <button
              onClick={() => {
                setAppointmentConfirmation(null);
                setCurrentPage('main');
              }}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold transition-colors"
            >
              Continuar al Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  };

  // New Student Form
  const NewStudentForm = () => (
    <div className="p-4 pb-20">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Add New Student</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
          <input
            type="text"
            value={newStudent.name}
            onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
            className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
            placeholder="Enter student name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
          <input
            type="tel"
            value={newStudent.phone}
            onChange={(e) => setNewStudent({...newStudent, phone: e.target.value})}
            className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
            placeholder="+52 55 1234 5678"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={newStudent.email}
            onChange={(e) => setNewStudent({...newStudent, email: e.target.value})}
            className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
            placeholder="student@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Program *</label>
          <select 
            value={newStudent.program}
            onChange={(e) => setNewStudent({...newStudent, program: e.target.value})}
            className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
          >
            <option value="">Select Program</option>
            <option value="Microblading Certification">Microblading Certification</option>
            <option value="Eyelash Extensions">Eyelash Extensions</option>
            <option value="Henna Specialist">Henna Specialist</option>
            <option value="Advanced Microblading">Advanced Microblading</option>
            <option value="Volume Lashes">Volume Lashes</option>
          </select>
        </div>

        <button 
          onClick={addStudent}
          className="w-full bg-purple-600 text-white py-4 rounded-xl font-semibold hover:bg-purple-700 transition-colors shadow-lg"
        >
          Add Student
        </button>
      </div>
    </div>
  );

  // Receipt Page
  const ReceiptPage = () => (
    <div className="p-4 pb-20">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Create Receipt</h2>
      
      {!selectedStudent ? (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Student</h3>
          <div className="space-y-3">
            {students.map((student) => (
              <button
                key={student.id}
                onClick={() => setSelectedStudent(student)}
                className="w-full p-4 text-left bg-white rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm transition-colors"
              >
                <h4 className="font-medium text-gray-900">{student.name}</h4>
                <p className="text-sm text-gray-600">{student.program}</p>
                <p className="text-xs text-gray-500">{student.phone}</p>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="bg-blue-50 p-4 rounded-xl mb-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium text-gray-900">{selectedStudent.name}</h3>
                <p className="text-sm text-gray-600">{selectedStudent.program}</p>
              </div>
              <button
                onClick={() => setSelectedStudent(null)}
                className="text-blue-600 text-sm font-medium"
              >
                Change
              </button>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-4">Add Items</h3>
          <div className="space-y-3 mb-6">
            {receiptCatalog.map((item) => (
              <div key={item.id} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.category}</p>
                    <p className="text-lg font-bold text-green-600">${item.price}</p>
                  </div>
                  <button
                    onClick={() => addReceiptItem(item)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>

          {receiptItems.length > 0 && (
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Receipt Items</h3>
              <div className="space-y-3">
                {receiptItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">Qty: {item.quantity} × ${item.price}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <p className="font-bold text-gray-900">${item.price * item.quantity}</p>
                      <button
                        onClick={() => removeReceiptItem(item.id)}
                        className="text-red-600 p-1"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-bold text-gray-900">Total:</p>
                    <p className="text-xl font-bold text-green-600">${calculateTotal()}</p>
                  </div>
                </div>
              </div>
              
              <button
                onClick={generateReceipt}
                className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold mt-4 hover:bg-green-700 transition-colors shadow-lg"
              >
                🧾 Generar Recibo
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );

  // Students List Page
  const StudentsPage = () => (
    <div className="p-4 pb-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Students</h2>
        <button 
          onClick={() => setCurrentPage('new-student')}
          className="bg-purple-600 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg"
        >
          <Plus className="w-4 h-4 inline mr-1" />
          Add
        </button>
      </div>

      <div className="space-y-3">
        {students.map((student) => (
          <div key={student.id} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{student.name}</h4>
                <p className="text-sm text-gray-600">{student.program}</p>
                <p className="text-xs text-gray-500">{student.phone}</p>
                <p className="text-xs text-gray-500">{student.email}</p>
              </div>
              <div className="text-right">
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                  student.status === 'Active' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {student.status}
                </span>
                <p className="text-sm text-gray-600 mt-1">Progress: {student.progress}%</p>
              </div>
            </div>
            <div className="mt-3">
              <div className="bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${student.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Diploma Page
  const DiplomaPage = () => (
    <div className="p-4 pb-20">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Generate Diploma</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Eligible Students</h3>
        <div className="space-y-3">
          {students.filter(student => student.progress === 100).map((student) => (
            <div key={student.id} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium text-gray-900">{student.name}</h4>
                  <p className="text-sm text-gray-600">{student.program}</p>
                  <p className="text-xs text-green-600 font-medium">✓ Course Completed</p>
                </div>
                <button
                  onClick={() => generateDiploma(student)}
                  className="bg-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-pink-700 transition-colors"
                >
                  <Award className="w-4 h-4 inline mr-1" />
                  Generate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Students in Progress</h3>
        <div className="space-y-3">
          {students.filter(student => student.progress < 100 && student.status === 'Active').map((student) => (
            <div key={student.id} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium text-gray-600">{student.name}</h4>
                  <p className="text-sm text-gray-500">{student.program}</p>
                  <p className="text-xs text-gray-500">Progress: {student.progress}%</p>
                </div>
                <span className="text-gray-400 text-sm">Not Ready</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Bottom Navigation
  const BottomNavigation = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 max-w-md mx-auto shadow-lg">
      <div className="flex justify-around">
        <button
          onClick={() => setCurrentPage('main')}
          className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
            currentPage === 'main' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <Users className="w-5 h-5" />
          <span className="text-xs mt-1">Dashboard</span>
        </button>
        
        <button
          onClick={() => setCurrentPage('calendar')}
          className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
            currentPage === 'calendar' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <Calendar className="w-5 h-5" />
          <span className="text-xs mt-1">Calendar</span>
        </button>
        
        <button
          onClick={() => setCurrentPage('new-appointment')}
          className="flex flex-col items-center py-2 px-3 rounded-lg text-green-600 bg-green-50"
        >
          <Plus className="w-5 h-5" />
          <span className="text-xs mt-1">Add</span>
        </button>
        
        <button
          onClick={() => setCurrentPage('students')}
          className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
            currentPage === 'students' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <GraduationCap className="w-5 h-5" />
          <span className="text-xs mt-1">Students</span>
        </button>
        
        <button
          onClick={() => setCurrentPage('receipt')}
          className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
            currentPage === 'receipt' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <Receipt className="w-5 h-5" />
          <span className="text-xs mt-1">Receipt</span>
        </button>
      </div>
    </div>
  );

  // Main render function
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'main':
        return <Dashboard />;
      case 'calendar':
        return <CalendarView />;
      case 'new-appointment':
        return <NewAppointmentForm />;
      case 'new-student':
        return <NewStudentForm />;
      case 'receipt':
        return <ReceiptPage />;
      case 'students':
        return <StudentsPage />;
      case 'diploma':
        return <DiplomaPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
      <Header />
      {renderCurrentPage()}
      <BottomNavigation />
      {appointmentConfirmation && <AppointmentConfirmation />}
    </div>
  );
};

export default MAXFRADirectorMVP;