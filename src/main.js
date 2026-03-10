const mockData = {
  flights: [
    {
      id: "FL101",
      type: "flight",
      operator: "IndiGo",
      origin: "Delhi",
      destination: "Goa",
      date: "2026-04-12",
      departure: "06:10",
      arrival: "08:35",
      duration: "2h 25m",
      price: 4890,
      seats: 7,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "FL102",
      type: "flight",
      operator: "Air India",
      origin: "Mumbai",
      destination: "Jaipur",
      date: "2026-05-04",
      departure: "09:20",
      arrival: "11:10",
      duration: "1h 50m",
      price: 5340,
      seats: 5,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "FL103",
      type: "flight",
      operator: "Akasa Air",
      origin: "Bengaluru",
      destination: "Kolkata",
      date: "2026-06-18",
      departure: "15:40",
      arrival: "18:10",
      duration: "2h 30m",
      price: 6290,
      seats: 9,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1521727857535-28d2047314ac?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "FL104",
      type: "flight",
      operator: "Vistara",
      origin: "Chennai",
      destination: "Kochi",
      date: "2026-07-08",
      departure: "07:05",
      arrival: "08:20",
      duration: "1h 15m",
      price: 3520,
      seats: 4,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=1000&q=80"
    }
  ],
  buses: [
    {
      id: "BS201",
      type: "bus",
      operator: "RedBus Partner",
      origin: "Bengaluru",
      destination: "Coorg",
      date: "2026-04-20",
      departure: "22:00",
      arrival: "04:30",
      duration: "6h 30m",
      busType: "AC Sleeper",
      price: 990,
      seats: 16,
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "BS202",
      type: "bus",
      operator: "VRL Travels",
      origin: "Hyderabad",
      destination: "Vijayawada",
      date: "2026-05-10",
      departure: "21:15",
      arrival: "03:00",
      duration: "5h 45m",
      busType: "AC Seater",
      price: 780,
      seats: 19,
      rating: 4.1,
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "BS203",
      type: "bus",
      operator: "SRS Travels",
      origin: "Chennai",
      destination: "Madurai",
      date: "2026-06-14",
      departure: "20:30",
      arrival: "05:10",
      duration: "8h 40m",
      busType: "Volvo Multi-Axle",
      price: 1150,
      seats: 12,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "BS204",
      type: "bus",
      operator: "Orange Tours",
      origin: "Pune",
      destination: "Goa",
      date: "2026-07-19",
      departure: "19:45",
      arrival: "06:00",
      duration: "10h 15m",
      busType: "Semi Sleeper",
      price: 870,
      seats: 14,
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?auto=format&fit=crop&w=1000&q=80"
    }
  ],
  holidays: [
    {
      id: "HL301",
      type: "holiday",
      title: "Goa Weekend Escape",
      destination: "Goa",
      startDate: "2026-04-25",
      nights: 3,
      groupSize: 4,
      includes: "Beach resort, breakfast, transfer",
      price: 12900,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "HL302",
      type: "holiday",
      title: "Royal Rajasthan Circuit",
      destination: "Jaipur",
      startDate: "2026-10-10",
      nights: 5,
      groupSize: 6,
      includes: "4-star hotels, city tours, breakfast",
      price: 23900,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "HL303",
      type: "holiday",
      title: "Kerala Backwater Retreat",
      destination: "Kochi",
      startDate: "2026-08-14",
      nights: 4,
      groupSize: 5,
      includes: "Houseboat stay, local meals, sightseeing",
      price: 18500,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "HL304",
      type: "holiday",
      title: "Darjeeling Himalayan Calm",
      destination: "Kolkata",
      startDate: "2026-05-21",
      nights: 4,
      groupSize: 4,
      includes: "Boutique hotel, toy train ride, transfers",
      price: 16900,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1000&q=80"
    }
  ]
};

const resultGrid = document.getElementById("resultGrid");
const resultsSection = document.getElementById("results");
const resultsMeta = document.getElementById("resultsMeta");
const confirmationBox = document.getElementById("confirmationBox");
const bookingForm = document.getElementById("bookingForm");
const selectedSummary = document.getElementById("selectedSummary");
const clearResultsBtn = document.getElementById("clearResults");

const bookingModal = new window.bootstrap.Modal(document.getElementById("bookingModal"));
let selectedBookingItem = null;
let lastQueryTravelers = 1;

const formatINR = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);

const unique = (values) => [...new Set(values)].sort((a, b) => a.localeCompare(b));

const populateSelect = (id, values, placeholder) => {
  const element = document.getElementById(id);
  element.innerHTML = `<option value="">${placeholder}</option>${values
    .map((value) => `<option value="${value}">${value}</option>`)
    .join("")}`;
};

const setDefaultDate = (id, date) => {
  const input = document.getElementById(id);
  input.value = date;
};

const setupFilters = () => {
  const flightOrigins = unique(mockData.flights.map((item) => item.origin));
  const flightDestinations = unique(mockData.flights.map((item) => item.destination));
  const busOrigins = unique(mockData.buses.map((item) => item.origin));
  const busDestinations = unique(mockData.buses.map((item) => item.destination));
  const holidayDestinations = unique(mockData.holidays.map((item) => item.destination));

  populateSelect("flightFrom", flightOrigins, "Select city");
  populateSelect("flightTo", flightDestinations, "Select city");
  populateSelect("busFrom", busOrigins, "Select city");
  populateSelect("busTo", busDestinations, "Select city");
  populateSelect("holidayDestination", holidayDestinations, "Select destination");

  setDefaultDate("flightDate", mockData.flights[0].date);
  setDefaultDate("busDate", mockData.buses[0].date);
};

const getSearchResults = (category, filters) => {
  const travelers = Number(filters.travelers || 1);

  if (category === "flights") {
    return mockData.flights.filter(
      (item) =>
        item.origin === filters.origin &&
        item.destination === filters.destination &&
        item.date === filters.date &&
        item.seats >= travelers
    );
  }

  if (category === "buses") {
    return mockData.buses.filter(
      (item) =>
        item.origin === filters.origin &&
        item.destination === filters.destination &&
        item.date === filters.date &&
        item.seats >= travelers
    );
  }

  if (category === "holidays") {
    const budget = Number(filters.budget || 0);
    const month = Number(filters.month || 0);

    return mockData.holidays.filter((item) => {
      const itemMonth = new Date(item.startDate).getMonth() + 1;
      return (
        item.destination === filters.destination &&
        item.price <= budget &&
        itemMonth === month &&
        item.groupSize >= travelers
      );
    });
  }

  return [];
};

const singularLabels = {
  flights: "Flight",
  buses: "Bus",
  holidays: "Holiday Package"
};

const buildResultMeta = (category, count) => {
  const categoryText = singularLabels[category] || "Option";
  return `${count} ${categoryText} option${count === 1 ? "" : "s"} found.`;
};

const bookingHeading = (item) => {
  if (item.type === "holiday") return item.title;
  return `${item.origin} to ${item.destination}`;
};

const renderResults = (results, category) => {
  resultGrid.innerHTML = "";
  const hasResults = results.length > 0;
  resultsSection.hidden = !hasResults;
  resultsMeta.textContent = buildResultMeta(category, results.length);

  if (!hasResults) {
    return;
  }

  const categoryLabel = category.slice(0, -1);

  results.forEach((item) => {
    const subtitle =
      item.type === "holiday"
        ? `${item.nights} nights · Starts ${item.startDate}`
        : `${item.origin} → ${item.destination} · ${item.date}`;

    const detailLine =
      item.type === "holiday"
        ? `${item.includes}`
        : `${item.departure} - ${item.arrival} · ${item.duration}`;

    const extra =
      item.type === "bus"
        ? `${item.busType} · ${item.seats} seats left`
        : item.type === "flight"
          ? `${item.operator} · ${item.seats} seats left`
          : `Group up to ${item.groupSize}`;

    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4";
    col.innerHTML = `
      <article class="card result-card h-100 border-0 shadow-sm">
        <img src="${item.image}" class="card-img-top" alt="${bookingHeading(item)}" />
        <div class="card-body d-flex flex-column">
          <div class="d-flex justify-content-between align-items-start mb-2 gap-2">
            <span class="badge text-bg-light text-uppercase">${categoryLabel}</span>
            <span class="badge text-bg-success"><i class="bi bi-star-fill me-1"></i>${item.rating}</span>
          </div>
          <h3 class="h5">${bookingHeading(item)}</h3>
          <p class="text-muted small mb-2">${subtitle}</p>
          <p class="small mb-3">${detailLine}</p>
          <p class="small text-muted mb-3">${extra}</p>
          <div class="mt-auto d-flex justify-content-between align-items-center">
            <strong>${formatINR(item.price)}</strong>
            <button class="btn btn-warning btn-sm rounded-pill book-btn" data-id="${item.id}" data-category="${category}">Book Now</button>
          </div>
        </div>
      </article>
    `;
    resultGrid.appendChild(col);
  });
};

const getItemById = (category, id) => mockData[category].find((item) => item.id === id);

const openBookingModal = (category, id) => {
  const item = getItemById(category, id);
  if (!item) return;

  selectedBookingItem = item;
  selectedSummary.textContent = `${bookingHeading(item)} • ${formatINR(item.price)} per traveler`;

  const travelerInput = document.getElementById("passengerCount");
  travelerInput.value = String(lastQueryTravelers);
  travelerInput.max = String(item.type === "holiday" ? item.groupSize : 9);

  bookingForm.classList.remove("was-validated");
  bookingModal.show();
};

const buildBookingRecord = (item, formValues) => {
  const travelers = Number(formValues.travelers);
  const totalPrice = item.price * travelers;

  return {
    bookingId: `TRV${Date.now().toString().slice(-7)}`,
    category: item.type,
    itemId: item.id,
    title: bookingHeading(item),
    date: item.type === "holiday" ? item.startDate : item.date,
    travelers,
    totalPrice,
    contact: {
      fullName: formValues.fullName,
      email: formValues.email,
      phone: formValues.phone
    },
    specialRequest: formValues.specialRequest || "None",
    createdAt: new Date().toISOString()
  };
};

const renderConfirmation = (record) => {
  confirmationBox.classList.remove("empty-state");
  confirmationBox.innerHTML = `
    <div class="card-body p-4 p-lg-5">
      <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
        <h3 class="h4 mb-0">Booking Confirmed</h3>
        <span class="badge text-bg-success">${record.bookingId}</span>
      </div>
      <div class="row g-3">
        <div class="col-md-6">
          <p class="mb-1 text-muted">Trip</p>
          <p class="fw-semibold mb-3">${record.title}</p>
          <p class="mb-1 text-muted">Travel Date</p>
          <p class="fw-semibold mb-0">${record.date}</p>
        </div>
        <div class="col-md-6">
          <p class="mb-1 text-muted">Traveler</p>
          <p class="fw-semibold mb-3">${record.contact.fullName} (${record.travelers})</p>
          <p class="mb-1 text-muted">Total</p>
          <p class="fw-semibold mb-0">${formatINR(record.totalPrice)}</p>
        </div>
      </div>
      <hr />
      <p class="mb-1"><strong>Email:</strong> ${record.contact.email}</p>
      <p class="mb-1"><strong>Phone:</strong> ${record.contact.phone}</p>
      <p class="mb-0"><strong>Special Request:</strong> ${record.specialRequest}</p>
    </div>
  `;
};

const handleSearchSubmit = (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const category = form.dataset.category;
  const formData = new FormData(form);
  const filters = Object.fromEntries(formData.entries());

  lastQueryTravelers = Number(filters.travelers || 1);
  const results = getSearchResults(category, filters);

  renderResults(results, category);
  if (results.length) {
    resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const handleBookClick = (event) => {
  const button = event.target.closest(".book-btn");
  if (!button) return;

  openBookingModal(button.dataset.category, button.dataset.id);
};

const handleBookingSubmit = (event) => {
  event.preventDefault();

  if (!bookingForm.checkValidity() || !selectedBookingItem) {
    bookingForm.classList.add("was-validated");
    return;
  }

  const formData = new FormData(bookingForm);
  const formValues = Object.fromEntries(formData.entries());
  const record = buildBookingRecord(selectedBookingItem, formValues);

  renderConfirmation(record);
  bookingModal.hide();
  bookingForm.reset();

  document.getElementById("confirmation").scrollIntoView({ behavior: "smooth", block: "start" });
};

const setupNavHighlight = () => {
  const links = [...document.querySelectorAll(".app-navbar .nav-link[href^=\"#\"]")];
  const sections = [...document.querySelectorAll(".section-anchor")];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: 0.01 }
  );

  sections.forEach((section) => observer.observe(section));
};

const setupMobileNav = () => {
  const navLinks = document.querySelectorAll("#mainNav .nav-link");
  const navCollapseElement = document.getElementById("mainNav");
  const navCollapse = new window.bootstrap.Collapse(navCollapseElement, { toggle: false });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.getComputedStyle(document.querySelector(".navbar-toggler")).display !== "none") {
        navCollapse.hide();
      }
    });
  });
};

const setupAnimation = () => {
  const animated = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  animated.forEach((item) => observer.observe(item));
};

const init = () => {
  setupFilters();
  setupNavHighlight();
  setupMobileNav();
  setupAnimation();

  document.querySelectorAll("form[data-category]").forEach((form) => {
    form.addEventListener("submit", handleSearchSubmit);
  });

  resultGrid.addEventListener("click", handleBookClick);
  bookingForm.addEventListener("submit", handleBookingSubmit);

  clearResultsBtn.addEventListener("click", () => {
    resultsSection.hidden = true;
    resultGrid.innerHTML = "";
    resultsMeta.textContent = "Run a search to view options.";
  });
};

init();
