// Sample data for files
const filesData = [
  {
    id: 1,
    name: 'File name',
    type: 'excel',
    date: '12/9/2024',
    time: '11:00pm',
    status: 'approved'
  },
  {
    id: 2,
    name: 'File name',
    type: 'word',
    date: '12/9/2024',
    time: '11:00pm',
    status: 'approved'
  },
  {
    id: 3,
    name: 'File name',
    type: 'pdf',
    date: '3/5/2024',
    time: '11:00pm',
    status: 'pending'
  },
  {
    id: 4,
    name: 'File name',
    type: 'excel',
    date: '3/5/2024',
    time: '11:00pm',
    status: 'pending'
  },
  {
    id: 5,
    name: 'File name',
    type: 'word',
    date: '3/5/2024',
    time: '11:00pm',
    status: 'pending'
  },
  {
    id: 6,
    name: 'File name',
    type: 'pdf',
    date: '3/5/2024',
    time: '11:00pm',
    status: 'pending'
  },
  {
    id: 7,
    name: 'File name',
    type: 'word',
    date: '3/5/2024',
    time: '11:00pm',
    status: 'pending'
  }
];

// Function to get file icon based on type
function getFileIcon(type) {
  const icons = {
    excel: '<i class="fas fa-file-excel"></i>',
    pdf: '<i class="fas fa-file-pdf"></i>',
    word: '<i class="fas fa-file-word"></i>'
  };
  return icons[type] || '<i class="fas fa-file"></i>';
}

// Function to render files table
function renderFilesTable() {
  const tbody = document.getElementById('filesTableBody');
  
  tbody.innerHTML = filesData.map(file => `
    <tr>
      <td><input type="checkbox" class="w-25 form-check-input p-2"></td>
      <td>
        <div class="file-item">
          <div class="file-icon ${file.type}">
            ${getFileIcon(file.type)}
          </div>
          <div>
            <div class="file-name">${file.name}</div>
          </div>
        </div>
      </td>
      <td>
        <div class="file-date">${file.date}<br>${file.time}</div>
      </td>
      <td>
        <span class="status-badge ${file.status}">
          ${file.status.charAt(0).toUpperCase() + file.status.slice(1)}
        </span>
      </td>
      <td>
        <div class="file-actions d-flex justify-content-center">
          <button class="btn-action">Details</button>
          <button class="btn-action">Edit</button>
          <button class="btn-action">⋮</button>
        </div>
      </td>
    </tr>
  `).join('');
}

// Function to create approval chart
const ctx = document.getElementById('approvalChart').getContext('2d');

  const chartData = {
    labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
    datasets: [
      {
        label: 'Approved',
        data: [50000, 100000, 600000, 200000, 30000, 500000, 300000],
        backgroundColor: '#28a745',
        borderRadius: 6,
        barThickness: 14
      },
      {
        label: 'Pending',
        data: [100000, 1500000, 800000, 300000, 10000, 200000, 200000],
        backgroundColor: '#f1c40f',
        borderRadius: 6,
        barThickness: 14
      },
      {
        label: 'Rejected',
        data: [90000, 120000, 300000, 70000, 10000, 700000, 250000],
        backgroundColor: '#dc3545',
        borderRadius: 6,
        barThickness: 14
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 12
          },
          color: '#6c757d'
        }
      },
      y: {
        beginAtZero: true,
        max: 1500000,
        ticks: {
          stepSize: 500000,
          callback: function(value) {
            return value >= 1000000 ? (value / 1000000) + 'M' : value / 1000 + 'k';
          },
          font: {
            size: 12
          },
          color: '#6c757d'
        },
        grid: {
          color: '#e9ecef'
        }
      }
    },
    elements: {
      bar: {
        borderRadius: 6
      }
    }
  };

  new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options: chartOptions
  });

// Function to animate counter numbers
function animateCounters() {
  const counters = document.querySelectorAll('.stat-content h3');
  
  counters.forEach(counter => {
    const target = parseInt(counter.textContent.replace(/,/g, ''));
    const increment = target / 100;
    let current = 0;
    
    const updateCounter = () => {
      if (current < target) {
        current += increment;
        counter.textContent = Math.ceil(current).toLocaleString();
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target.toLocaleString();
      }
    };
    
    updateCounter();
  });
}

// Function to handle search functionality
function setupSearch() {
  const searchInput = document.querySelector('.search-files input');
  
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredFiles = filesData.filter(file => 
      file.name.toLowerCase().includes(searchTerm)
    );
    
    // Re-render table with filtered data
    const tbody = document.getElementById('filesTableBody');
    tbody.innerHTML = filteredFiles.map(file => `
      <tr>
        <td><input type="checkbox"></td>
        <td>
          <div class="file-item">
            <div class="file-icon ${file.type}">
              ${getFileIcon(file.type)}
            </div>
            <div>
              <div class="file-name">${file.name}</div>
              <div class="file-date">${file.date}</div>
            </div>
          </div>
        </td>
        <td>
          <div class="file-date">${file.date}<br>${file.time}</div>
        </td>
        <td>
          <span class="status-badge ${file.status}">
            ${file.status.charAt(0).toUpperCase() + file.status.slice(1)}
          </span>
        </td>
        <td>
          <div class="file-actions">
            <button class="btn-action">Details</button>
            <button class="btn-action">Edit</button>
            <button class="btn-action">⋮</button>
          </div>
        </td>
      </tr>
    `).join('');
  });
}

// Function to handle tab switching
function setupTabs() {
  const tabs = document.querySelectorAll('.tab');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}

// Function to handle category hover effects
function setupCategoryHovers() {
  const categoryItems = document.querySelectorAll('.category-item');
  
  categoryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'translateX(5px)';
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'translateX(0)';
    });
  });
}

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', () => {
  renderFilesTable();
  createApprovalChart();
  animateCounters();
  setupSearch();
  setupTabs();
  setupCategoryHovers();
  
  // Add some interactive effects
  const statCards = document.querySelectorAll('.stat-card');
  statCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
      card.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
    });
  });
});

// Add click handlers for various interactive elements
document.addEventListener('click', (e) => {
  // Handle file action buttons
  if (e.target.classList.contains('btn-action')) {
    const action = e.target.textContent;
    console.log(`${action} action clicked`);
  }
  
  // Handle export button
  if (e.target.closest('.btn-export')) {
    console.log('Export button clicked');
  }
  
  // Handle upload button
  if (e.target.closest('.btn-upload')) {
    console.log('Upload button clicked');
  }
});


document.getElementById("nextBtn").addEventListener("click", function () {
    document.getElementById("promptLayer").classList.remove("d-none");
  });

  document.querySelector(".btn-ok").addEventListener("click", function () {
    document.getElementById("promptLayer").classList.add("d-none");
  });
  
