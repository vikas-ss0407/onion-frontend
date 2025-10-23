import API_BASE_URL from "./config";

// Get all boxes
export const getBoxes = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/boxes`, {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("Failed to fetch boxes:", err);
    return [];
  }
};

// Create box
export const createBox = async (box) => {
  try {
    const res = await fetch(`${API_BASE_URL}/boxes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(box),
    });
    return res.ok ? await res.json() : null;
  } catch (err) {
    console.error("Failed to create box:", err);
    return null;
  }
};

// Update box
export const updateBox = async (id, box) => {
  try {
    const res = await fetch(`${API_BASE_URL}/boxes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(box),
    });
    return res.ok ? await res.json() : null;
  } catch (err) {
    console.error("Failed to update box:", err);
    return null;
  }
};

// Delete box
export const deleteBox = async (id) => {
  try {
    const res = await fetch(`${API_BASE_URL}/boxes/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    return res.ok ? await res.json() : null;
  } catch (err) {
    console.error("Failed to delete box:", err);
    return null;
  }
};

// Update maintenance alert
export const updateAlert = async (id, alertDays, action) => {
  try {
    const res = await fetch(`${API_BASE_URL}/boxes/${id}/alert`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ alertDays, action }),
    });
    return res.ok ? await res.json() : null;
  } catch (err) {
    console.error("Failed to update alert:", err);
    return null;
  }
};
