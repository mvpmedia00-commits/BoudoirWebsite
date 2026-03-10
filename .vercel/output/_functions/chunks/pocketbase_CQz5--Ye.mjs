const adminToken = undefined                                      ;
function getCollectionUrl(collection) {
  {
    throw new Error("POCKETBASE_URL is not configured.");
  }
}
async function createLead(payload) {
  const response = await fetch(getCollectionUrl(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...{}
    },
    body: JSON.stringify({
      status: "new",
      ...payload
    })
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`PocketBase create failed: ${response.status} ${errorText}`);
  }
  return response.json();
}
async function updateLead(id, updates) {
  const response = await fetch(`${getCollectionUrl()}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      ...{}
    },
    body: JSON.stringify(updates)
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`PocketBase update failed: ${response.status} ${errorText}`);
  }
  return response.json();
}
async function listMediaItems(station, niche, limit = 60) {
  const params = new URLSearchParams({
    page: "1",
    perPage: String(limit),
    sort: "+order,-created"
  });
  const filters = [`is_public = true`];
  if (station) filters.push(`station = "${station.replace(/"/g, '\\"')}"`);
  if (niche) filters.push(`(niche = "${niche.replace(/"/g, '\\"')}" || niche = "")`);
  if (filters.length) params.set("filter", filters.join(" && "));
  const response = await fetch(`${getCollectionUrl()}?${params.toString()}`, {
    headers: {
      ...{}
    }
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`PocketBase media list failed: ${response.status} ${errorText}`);
  }
  const data = await response.json();
  return data.items ?? [];
}
async function createEvent(payload) {
  try {
    const response = await fetch(getCollectionUrl("events"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...adminToken ? { Authorization: adminToken } : {}
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`PocketBase event create failed: ${response.status} ${errorText}`);
    }
    return response.json();
  } catch {
    return null;
  }
}

export { createLead as a, createEvent as c, listMediaItems as l, updateLead as u };
