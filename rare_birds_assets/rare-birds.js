
        // Region coordinates
        const REGION_COORDS = {
            'SG': { lat: 1.3521, lng: 103.8198, zoom: 11, name: 'Singapore' },
            'US': { lat: 39.8283, lng: -98.5795, zoom: 4, name: 'United States' },
            'CA': { lat: 56.1304, lng: -106.3468, zoom: 4, name: 'Canada' },
            'GB': { lat: 55.3781, lng: -3.4360, zoom: 6, name: 'United Kingdom' },
            'AU': { lat: -25.2744, lng: 133.7751, zoom: 4, name: 'Australia' },
            'NZ': { lat: -40.9006, lng: 174.8860, zoom: 6, name: 'New Zealand' },
            'IN': { lat: 20.5937, lng: 78.9629, zoom: 5, name: 'India' },
            'MY': { lat: 4.2105, lng: 101.9758, zoom: 6, name: 'Malaysia' },
            'TH': { lat: 15.8700, lng: 100.9925, zoom: 6, name: 'Thailand' },
            'JP': { lat: 36.2048, lng: 138.2529, zoom: 6, name: 'Japan' },
            'TW': { lat: 23.6978, lng: 120.9605, zoom: 7, name: 'Taiwan' },
            'KR': { lat: 35.9078, lng: 127.7669, zoom: 7, name: 'South Korea' },
            'BR': { lat: -14.2350, lng: -51.9253, zoom: 4, name: 'Brazil' },
            'MX': { lat: 23.6345, lng: -102.5528, zoom: 5, name: 'Mexico' },
            'ZA': { lat: -30.5595, lng: 22.9375, zoom: 6, name: 'South Africa' },
            'KE': { lat: -0.0236, lng: 37.9062, zoom: 6, name: 'Kenya' }
        };
        
        // Popular hotspots database
        const POPULAR_HOTSPOTS = {
            // Singapore
            'L2180959': { name: 'Singapore Botanic Gardens', lat: 1.3138, lng: 103.8159, zoom: 15, region: 'Singapore' },
            'L974576': { name: 'Sungei Buloh Wetland Reserve', lat: 1.4458, lng: 103.7302, zoom: 15, region: 'Singapore' },
            'L2083877': { name: 'Pasir Ris Park', lat: 1.3793, lng: 103.9498, zoom: 15, region: 'Singapore' },
            'L2084165': { name: 'Pulau Ubin', lat: 1.4043, lng: 103.9601, zoom: 14, region: 'Singapore' },
            'L3775551': { name: 'Central Catchment Nature Reserve', lat: 1.3644, lng: 103.8050, zoom: 14, region: 'Singapore' },
            'L2427374': { name: 'Kent Ridge Park', lat: 1.2828, lng: 103.7847, zoom: 15, region: 'Singapore' },
            'L8336945': { name: 'Coney Island Park', lat: 1.4118, lng: 103.9325, zoom: 15, region: 'Singapore' },
            'L5652403': { name: 'Gardens by the Bay', lat: 1.2816, lng: 103.8636, zoom: 15, region: 'Singapore' },
            
            // Malaysia - Johor
            'L2631784': { name: 'Johor Bahru City', lat: 1.4927, lng: 103.7414, zoom: 13, region: 'Johor, Malaysia' },
            'L7888736': { name: 'Tanjung Piai National Park', lat: 1.2656, lng: 103.5087, zoom: 14, region: 'Johor, Malaysia' },
            'L3776116': { name: 'Gunung Pulai', lat: 1.5667, lng: 103.5333, zoom: 13, region: 'Johor, Malaysia' },
            'L10634823': { name: 'Endau-Rompin National Park', lat: 2.4000, lng: 103.3667, zoom: 12, region: 'Johor, Malaysia' },
            
            // Malaysia - Other
            'L1316558': { name: 'Taman Negara National Park', lat: 4.4667, lng: 102.4167, zoom: 11, region: 'Pahang, Malaysia' },
            'L3776047': { name: 'Fraser\'s Hill', lat: 3.7167, lng: 101.7333, zoom: 13, region: 'Pahang, Malaysia' },
            'L2630841': { name: 'Kuala Lumpur Bird Park', lat: 3.1442, lng: 101.6885, zoom: 16, region: 'Kuala Lumpur, Malaysia' },
            
            // United States - Popular
            'L109516': { name: 'Central Park, New York', lat: 40.7812, lng: -73.9665, zoom: 14, region: 'New York, USA' },
            'L268242': { name: 'Point Reyes National Seashore, CA', lat: 38.0437, lng: -122.8733, zoom: 12, region: 'California, USA' },
            'L286031': { name: 'Everglades National Park, FL', lat: 25.2866, lng: -80.8987, zoom: 11, region: 'Florida, USA' },
            
            // UK
            'L717776': { name: 'RSPB Bempton Cliffs', lat: 54.1314, lng: -0.1667, zoom: 14, region: 'England, UK' },
            'L823599': { name: 'London Wetland Centre', lat: 51.4789, lng: -0.2289, zoom: 15, region: 'England, UK' },
            
            // Australia
            'L1075502': { name: 'Kakadu National Park', lat: -12.6500, lng: 132.4167, zoom: 10, region: 'Northern Territory, Australia' },
            'L960690': { name: 'Sydney Harbour National Park', lat: -33.8568, lng: 151.2153, zoom: 13, region: 'New South Wales, Australia' },
            
            // Taiwan - popular birding areas (eBird subdivision searches)
            'TW-TPE': { name: 'Guandu Nature Park', lat: 25.1176, lng: 121.4662, zoom: 14, region: 'Taipei, Taiwan' },
            'TW-NWT': { name: 'Yangmingshan National Park', lat: 25.1667, lng: 121.5667, zoom: 13, region: 'New Taipei, Taiwan' },
            'TW-KEE': { name: 'Keelung Coast', lat: 25.1276, lng: 121.7392, zoom: 13, region: 'Keelung, Taiwan' },
            'TW-ILA': { name: 'Yilan Plain', lat: 24.7021, lng: 121.7378, zoom: 12, region: 'Yilan, Taiwan' },
            'TW-HUA': { name: 'Taroko National Park', lat: 24.1516, lng: 121.6310, zoom: 12, region: 'Hualien, Taiwan' },
            'TW-TTT': { name: 'Taitung Coast', lat: 22.7554, lng: 121.1500, zoom: 12, region: 'Taitung, Taiwan' },
            'TW-NAN-HEHUAN': { name: '合欢山 (Hehuanshan)', lat: 24.1436, lng: 121.2750, zoom: 13, region: 'Nantou, Taiwan', apiRegion: 'TW-NAN' },
            'TW-NAN-QINGJING': { name: 'Qingjing Farm', lat: 24.0440, lng: 121.1610, zoom: 14, region: 'Nantou, Taiwan', apiRegion: 'TW-NAN' },
            'TW-TXG-GAOMEI': { name: 'Gaomei Wetlands', lat: 24.3115, lng: 120.5490, zoom: 14, region: 'Taichung, Taiwan', apiRegion: 'TW-TXG' },
            'TW-NAN-SHANLINXI': { name: 'Shanlinxi', lat: 23.6667, lng: 120.7500, zoom: 13, region: 'Nantou, Taiwan', apiRegion: 'TW-NAN' },
            'TW-TPE-GUANDU': { name: 'Guandu Nature Park', lat: 25.1176, lng: 121.4662, zoom: 14, region: 'Taipei, Taiwan', apiRegion: 'TW-TPE' },
            'TW-TPE-DAAN': { name: 'Daan Forest Park', lat: 25.0297, lng: 121.5366, zoom: 15, region: 'Taipei, Taiwan', apiRegion: 'TW-TPE' },
            'TW-NWT-YANGMINGSHAN': { name: 'Yangmingshan National Park', lat: 25.1667, lng: 121.5667, zoom: 13, region: 'New Taipei, Taiwan', apiRegion: 'TW-NWT' },
            'TW-TPE-SHEZIDAO': { name: 'Shezidao', lat: 25.1090, lng: 121.4720, zoom: 14, region: 'Taipei, Taiwan', apiRegion: 'TW-TPE' },
            'TW-NAN-SUNMOONLAKE': { name: 'Sun Moon Lake', lat: 23.8650, lng: 120.9150, zoom: 13, region: 'Nantou, Taiwan', apiRegion: 'TW-NAN' }
        };
        
        // Initialize map
        const defaultRegion = getRegionCode();
        const coords = REGION_COORDS[defaultRegion] || REGION_COORDS['SG'];
        const map = L.map('map', {
            zoomControl: false
        }).setView([coords.lat, coords.lng], coords.zoom);
        
        // Add zoom control to bottom right
        L.control.zoom({ position: 'bottomright' }).addTo(map);
        
        // Map tile layers
        const lightTiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
        });
        
        const darkTiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
        });
        
        // Check saved preference or default to light
        let isDarkMode = localStorage.getItem('mapDarkMode') === 'true';
        (isDarkMode ? darkTiles : lightTiles).addTo(map);
        updateDarkModeIcon();
        
        function toggleDarkMode() {
            isDarkMode = !isDarkMode;
            localStorage.setItem('mapDarkMode', isDarkMode);
            
            if (isDarkMode) {
                map.removeLayer(lightTiles);
                darkTiles.addTo(map);
            } else {
                map.removeLayer(darkTiles);
                lightTiles.addTo(map);
            }
            updateDarkModeIcon();
        }
        
        function updateDarkModeIcon() {
            const icon = document.getElementById('dark-mode-icon');
            const btn = document.getElementById('dark-mode-btn');
            map.getContainer().classList.toggle('map-dark-mode', isDarkMode);
            if (isDarkMode) {
                icon.className = 'fa-solid fa-sun';
                btn.title = 'Switch to light mode';
            } else {
                icon.className = 'fa-solid fa-moon';
                btn.title = 'Switch to dark mode';
            }
        }
        
        // Map click handler - find nearby hotspots
        map.on('click', function(e) {
            const lat = e.latlng.lat.toFixed(6);
            const lng = e.latlng.lng.toFixed(6);
            fetchNearbyHotspots(lat, lng);
        });
        
        function escapeHtml(value) {
            return String(value ?? '').replace(/[&<>"']/g, character => ({
                '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
            }[character]));
        }

        function safeImageUrl(value, forHtml = true) {
            try {
                const url = new URL(value);
            if (url.protocol !== 'https:') return '';
            return forHtml ? escapeHtml(url.href) : url.href;
            } catch {
                return '';
            }
        }

        // Fetch nearby hotspots from eBird API
        async function fetchNearbyHotspots(lat, lng) {
            const apiKey = getApiKey();
            if (!apiKey) {
                showApiKeyModal();
                return;
            }
            
            showHotspotsModal();
            document.getElementById('hotspots-location-info').textContent = `Searching near ${lat}, ${lng}...`;
            document.getElementById('hotspots-list').innerHTML = '<div class="text-center py-8"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-400"></i></div>';
            
            try {
                const response = await fetch(
                    `https://api.ebird.org/v2/ref/hotspot/geo?lat=${lat}&lng=${lng}&dist=25&fmt=json`,
                    {
                        headers: {
                            'X-eBirdApiToken': apiKey
                        }
                    }
                );
                
                if (!response.ok) {
                    const errorText = await response.text();
                    console.error('eBird API error:', response.status, errorText);
                    throw new Error(`eBird API error: ${response.status}`);
                }
                
                const hotspots = await response.json();
                displayHotspots(hotspots, lat, lng);
                
            } catch (error) {
                console.error('Error fetching hotspots:', error);
                document.getElementById('hotspots-list').innerHTML = `
                    <div class="bg-red-900/20 border border-red-500/50 rounded-lg p-4 text-red-300">
                        <i class="fa-solid fa-exclamation-circle mr-2"></i>
                        <div class="font-semibold mb-2">Failed to fetch hotspots</div>
                        <div class="text-sm text-red-400">${escapeHtml(error.message)}</div>
                        <div class="text-xs text-slate-400 mt-2">Check browser console for details</div>
                    </div>
                `;
            }
        }
        
        // Display hotspots in modal
        function displayHotspots(hotspots, lat, lng) {
            const listDiv = document.getElementById('hotspots-list');
            
            if (hotspots.length === 0) {
                document.getElementById('hotspots-location-info').textContent = `No hotspots found within 25km of this location.`;
                listDiv.innerHTML = `
                    <div class="bg-slate-700/50 rounded-lg p-4 text-slate-300 text-center">
                        <i class="fa-solid fa-map-pin text-4xl text-slate-500 mb-3"></i>
                        <p>Try clicking a different area or zoom in to a known birding location.</p>
                    </div>
                `;
                return;
            }
            
            // Calculate distances manually if not provided
            function calculateDistance(lat1, lng1, lat2, lng2) {
                const R = 6371; // Earth's radius in km
                const dLat = (lat2 - lat1) * Math.PI / 180;
                const dLng = (lng2 - lng1) * Math.PI / 180;
                const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                          Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                          Math.sin(dLng/2) * Math.sin(dLng/2);
                const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
                return R * c;
            }
            
            // Add distance to each hotspot
            hotspots.forEach(hotspot => {
                if (!hotspot.distance && !hotspot.distanceKm) {
                    hotspot.calculatedDistance = calculateDistance(
                        parseFloat(lat), 
                        parseFloat(lng), 
                        hotspot.lat, 
                        hotspot.lng
                    );
                } else {
                    hotspot.calculatedDistance = hotspot.distance || hotspot.distanceKm || 0;
                }
            });
            
            // Sort hotspots by distance (closest first)
            const sortedHotspots = hotspots.sort((a, b) => {
                return a.calculatedDistance - b.calculatedDistance;
            });
            
            // Get current region code
            const currentRegionCode = getRegionCode();
            
            // Calculate distances for regions/countries
            const regionsWithDistance = Object.entries(REGION_COORDS).map(([code, data]) => {
                const distance = calculateDistance(
                    parseFloat(lat), 
                    parseFloat(lng), 
                    data.lat, 
                    data.lng
                );
                return { code, data, distance };
            }).sort((a, b) => a.distance - b.distance);
            
            // Separate current region and other regions
            const currentRegion = regionsWithDistance.find(r => r.code === currentRegionCode);
            const otherRegions = regionsWithDistance.filter(r => r.code !== currentRegionCode).slice(0, 4);
            
            // Combine current region + 4 nearest others
            const regionsToShow = currentRegion ? [currentRegion, ...otherRegions] : regionsWithDistance.slice(0, 5);
            
            document.getElementById('hotspots-location-info').textContent = `Found ${sortedHotspots.length} hotspot${sortedHotspots.length > 1 ? 's' : ''} within 25km:`;
            
            let html = '';
            
            // Add Countries & Regions section first
            html += '<div class="px-3 py-2 bg-slate-900/50 text-slate-400 text-xs font-semibold uppercase sticky top-0">Countries & Regions</div>';
            html += regionsToShow.map(({ code, data, distance }, index) => {
                const isCurrent = code === currentRegionCode;
                const borderColor = isCurrent ? 'border-amber-500' : 'border-slate-600 hover:border-amber-500';
                const badge = isCurrent ? '<span class="text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded ml-2">Current</span>' : '';
                return `
                    <div class="hotspot-item bg-slate-700/50 hover:bg-slate-600/50 rounded-lg p-4 cursor-pointer transition border ${borderColor}"
                         data-region-code="${escapeHtml(code)}">
                        <div class="flex justify-between items-start gap-3">
                            <div class="flex-1">
                                <div class="text-white font-medium mb-1 flex items-center">${data.name}${badge}</div>
                                <div class="text-slate-400 text-sm flex items-center gap-3">
                                    <span><i class="fa-solid fa-globe mr-1"></i>Country/Region</span>
                                    <span><i class="fa-solid fa-route mr-1"></i>${distance.toFixed(0)} km away</span>
                                </div>
                            </div>
                            <div class="text-slate-500 text-xs font-mono whitespace-nowrap">${code}</div>
                        </div>
                    </div>
                `;
            }).join('');
            
            // Add Hotspots section
            html += '<div class="px-3 py-2 bg-slate-900/50 text-slate-400 text-xs font-semibold uppercase mt-2 sticky top-0">Nearby Hotspots</div>';
            html += sortedHotspots.slice(0, 20).map((hotspot, index) => {
                const distance = hotspot.calculatedDistance.toFixed(1) + ' km';
                return `
                    <div class="hotspot-item bg-slate-700/50 hover:bg-slate-600/50 rounded-lg p-4 cursor-pointer transition border border-slate-600 hover:border-emerald-500"
                         data-hotspot-index="${index}">
                        <div class="flex justify-between items-start gap-3">
                            <div class="flex-1">
                                <div class="text-white font-medium mb-1">${escapeHtml(hotspot.locName)}</div>
                                <div class="text-slate-400 text-sm flex items-center gap-3">
                                    <span><i class="fa-solid fa-location-dot mr-1"></i>${escapeHtml(hotspot.countryCode)}</span>
                                    <span><i class="fa-solid fa-route mr-1"></i>${distance} away</span>
                                </div>
                            </div>
                            <div class="text-slate-500 text-xs font-mono whitespace-nowrap">${escapeHtml(hotspot.locId)}</div>
                        </div>
                    </div>
                `;
            }).join('');
            
            listDiv.innerHTML = html;
            
            if (sortedHotspots.length > 20) {
                listDiv.innerHTML += `
                    <div class="text-slate-400 text-sm text-center py-2">
                        Showing 20 closest hotspots of ${sortedHotspots.length} total
                    </div>
                `;
            }
            listDiv.querySelectorAll('[data-hotspot-index]').forEach(item => {
                const hotspot = sortedHotspots[Number(item.dataset.hotspotIndex)];
                item.addEventListener('click', () => {
                    const lat = Number(hotspot.lat);
                    const lng = Number(hotspot.lng);
                    if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;
                    selectHotspot(hotspot.locId, hotspot.locName, lat, lng);
                });
            });
            listDiv.querySelectorAll('[data-region-code]').forEach(item => {
                item.addEventListener('click', () => selectRegion(item.dataset.regionCode));
            });
        }
        
        // Select a region/country
        function selectRegion(code) {
            hideHotspotsModal();
            setRegionCode(code);
            document.getElementById('region-name').textContent = REGION_COORDS[code].name;
            document.getElementById('region-search').value = code;
            updateMapRegion(code);
            if (getApiKey()) {
                fetchLiveData();
            }
        }
        
        // Show hotspots modal
        function showHotspotsModal() {
            document.getElementById('hotspots-modal').style.display = 'flex';
        }
        
        // Hide hotspots modal
        function hideHotspotsModal() {
            document.getElementById('hotspots-modal').style.display = 'none';
        }
        
        // Select a hotspot and load its data
        function selectHotspot(locId, locName, lat, lng) {
            // Hide modal
            hideHotspotsModal();
            
            // Set the region code to the hotspot ID
            setRegionCode(locId);
            document.getElementById('region-name').textContent = locName;
            document.getElementById('region-search').value = locId;
            
            // Fly to the hotspot location
            map.flyTo([lat, lng], 15, { duration: 1.5 });
            
            // Fetch rare birds for this hotspot
            if (getApiKey()) {
                fetchLiveData();
            }
        }
        
        // Mobile sidebar toggle
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const handleText = document.querySelector('#sidebar-handle .handle-text');
            sidebar.classList.toggle('expanded');
            if (sidebar.classList.contains('expanded')) {
                handleText.textContent = 'Swipe down to close';
            } else {
                handleText.textContent = 'Swipe up to see bird list';
            }
        }
        
        // Close sidebar when clicking on map (mobile)
        document.getElementById('map').addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                const sidebar = document.getElementById('sidebar');
                const handleText = document.querySelector('#sidebar-handle .handle-text');
                sidebar.classList.remove('expanded');
                handleText.textContent = 'Swipe up to see bird list';
            }
        });
        
        // State
        let allAlerts = [];
        let markers = L.layerGroup().addTo(map);
        let daysFilter = 3;
        let currentRegion = defaultRegion;
        
        // Days slider
        const slider = document.getElementById('days-slider');
        const daysValue = document.getElementById('days-value');
        
        slider.addEventListener('input', function() {
            daysFilter = parseInt(this.value);
            daysValue.textContent = daysFilter + (daysFilter === 1 ? ' day' : ' days');
            this.style.setProperty('--val', ((daysFilter - 1) / 29 * 100) + '%');
            renderAlerts();
        });
        
        // Search
        document.getElementById('search-input').addEventListener('input', function() {
            renderAlerts();
        });
        
        // Get coordinates for a location (or use provided lat/lng)
        function getCoords(location, lat, lng) {
            // Use actual coordinates if provided by API
            if (lat && lng && !isNaN(lat) && !isNaN(lng)) {
                return [lat, lng];
            }
            // Fallback to current region center with small random offset
            const regionCoords = REGION_COORDS[currentRegion] || REGION_COORDS['SG'];
            return [
                regionCoords.lat + (Math.random() - 0.5) * 0.1, 
                regionCoords.lng + (Math.random() - 0.5) * 0.1
            ];
        }
        
        // Render filtered alerts
        function renderAlerts() {
            const search = document.getElementById('search-input').value.toLowerCase();
            const cutoffDate = new Date();
            cutoffDate.setDate(cutoffDate.getDate() - daysFilter);
            
            // Filter alerts
            const filtered = allAlerts.filter(alert => {
                const matchesDate = alert.date >= cutoffDate;
                const matchesSearch = !search || 
                    alert.species.toLowerCase().includes(search) ||
                    alert.location.toLowerCase().includes(search) ||
                    (alert.sciName && alert.sciName.toLowerCase().includes(search));
                return matchesDate && matchesSearch;
            });
            
            // Sort by date (newest first)
            filtered.sort((a, b) => b.date - a.date);
            
            // Collapse observations of same species within 500m - keep latest
            const collapsed = collapseNearbyObservations(filtered, 500);
            
            document.getElementById('alert-count').textContent = collapsed.length;
            
            // Date range
            if (filtered.length > 0) {
                const oldest = new Date(Math.min(...filtered.map(a => a.date)));
                const newest = new Date(Math.max(...filtered.map(a => a.date)));
                document.getElementById('date-range').textContent = 
                    `${oldest.toLocaleDateString()} - ${newest.toLocaleDateString()}`;
            } else {
                document.getElementById('date-range').textContent = '';
            }
            
            // Render bird list
            const listEl = document.getElementById('bird-list');
            if (collapsed.length === 0) {
                listEl.innerHTML = `
                    <div class="text-center py-12 text-slate-500">
                        <i class="fa-solid fa-binoculars text-4xl mb-4 opacity-50"></i>
                        <p>No alerts found</p>
                        <p class="text-sm mt-2">Try adjusting the filter</p>
                    </div>`;
            } else {
                listEl.innerHTML = collapsed.map((alert, idx) => `
                    <div class="bird-card bg-slate-700/50 rounded-xl p-3 cursor-pointer border border-slate-600/50 hover:border-amber-500/50"
                         data-alert-index="${idx}">
                        <div class="flex gap-3">
                               <img src="${safeImageUrl(alert.image) || 'https://via.placeholder.com/80?text=No+Image'}"
                                   alt="${escapeHtml(alert.species)}"
                                 class="bird-thumb">
                            <div class="flex-1 min-w-0">
                                <div class="flex items-start justify-between gap-2">
                                    <h3 class="font-semibold text-white truncate">${escapeHtml(alert.species)}</h3>
                                    <div class="flex items-center gap-1">
                                        ${alert.confirmed ? '<span class="confirmed-badge" title="Confirmed by eBird reviewers">✓</span>' : ''}
                                        ${alert.observations && alert.observations.length > 1 ? `<span class="text-xs text-slate-400 bg-slate-600 px-1.5 py-0.5 rounded">${alert.observations.length} obs</span>` : ''}
                                    </div>
                                </div>
                                <p class="text-slate-400 text-xs italic truncate">${escapeHtml(alert.sciName)}</p>
                                <div class="flex items-center gap-2 mt-2 text-xs text-slate-400">
                                    <i class="fa-solid fa-location-dot text-emerald-400"></i>
                                    <span class="truncate">${escapeHtml(alert.location)}</span>
                                </div>
                                <div class="flex items-center justify-between mt-1 text-xs">
                                    <span class="text-slate-500">
                                        <i class="fa-solid fa-clock mr-1"></i>
                                        ${formatDateTime(alert.date)}
                                    </span>
                                    <span class="text-amber-400 font-medium">×${escapeHtml(alert.count)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('');
                listEl.querySelectorAll('[data-alert-index]').forEach(card => {
                    card.addEventListener('click', () => focusAlert(Number(card.dataset.alertIndex)));
                });
                listEl.querySelectorAll('img').forEach(image => {
                    image.addEventListener('error', () => { image.style.visibility = 'hidden'; }, { once: true });
                });
            }
            
            // Update markers
            markers.clearLayers();
            
            // Add markers for each collapsed observation
            collapsed.forEach((alert, idx) => {
                const coords = getCoords(alert.location, alert.lat, alert.lng);
                
                // Use the bird's image for the marker
                const markerImage = safeImageUrl(alert.image);
                const size = 48;
                
                const markerElement = document.createElement('div');
                markerElement.className = 'custom-marker';
                markerElement.style.width = markerElement.style.height = `${size}px`;
                const markerPhoto = document.createElement('img');
                markerPhoto.alt = alert.species;
                markerPhoto.addEventListener('error', () => {
                    markerElement.textContent = '🐦';
                }, { once: true });
                markerPhoto.src = safeImageUrl(alert.image, false) || 'https://via.placeholder.com/80?text=No+Image';
                markerElement.append(markerPhoto);
                const icon = L.divIcon({
                    className: '',
                    html: markerElement,
                    iconSize: [size, size],
                    iconAnchor: [size / 2, size / 2]
                });
                
                const marker = L.marker(coords, { icon }).addTo(markers);
                
                // Build detailed popup with all observations
                const allObs = alert.observations || [alert];
                const popupContent = `
                    <div class="p-3" style="min-width: 300px;">
                        <div class="flex gap-3 mb-3">
                               <img src="${safeImageUrl(alert.image)}" class="w-16 h-16 rounded-lg object-cover bg-slate-600">
                            <div>
                                <h3 class="font-bold text-amber-400 text-base">${escapeHtml(alert.species)}</h3>
                                <p class="text-slate-400 text-xs italic">${escapeHtml(alert.sciName)}</p>
                                <p class="text-emerald-400 text-xs mt-1"><i class="fa-solid fa-location-dot mr-1"></i>${escapeHtml(alert.location)}</p>
                            </div>
                        </div>
                        <div class="border-t border-slate-600 pt-2">
                            <p class="text-slate-400 text-xs mb-2">${allObs.length} observation${allObs.length > 1 ? 's' : ''}</p>
                            <div class="space-y-2 max-h-48 overflow-y-auto">
                                ${allObs.map(obs => `
                                    <div class="bg-slate-700/50 rounded-lg p-2 text-xs">
                                        <div class="flex justify-between items-start mb-1">
                                            <span class="text-white font-medium">
                                                <i class="fa-solid fa-clock text-slate-400 mr-1"></i>${formatDateTime(obs.date)}
                                            </span>
                                            <span class="text-amber-400">×${escapeHtml(obs.count || 1)}</span>
                                        </div>
                                        <div class="text-slate-400">
                                            <i class="fa-solid fa-user mr-1"></i>${escapeHtml(obs.observer || 'Unknown')}
                                            ${obs.confirmed ? '<span class="ml-1 text-emerald-400" title="Confirmed">✓</span>' : ''}
                                        </div>
                                        ${obs.comments ? `<div class="text-slate-300 mt-1 italic">"${escapeHtml(obs.comments)}"</div>` : ''}
                                        ${obs.hasMedia ? `<div class="text-sky-400 mt-1"><i class="fa-solid fa-camera mr-1"></i>Media attached - <a href="https://ebird.org/checklist/${encodeURIComponent(obs.subId || '')}" target="_blank" rel="noopener noreferrer" class="underline hover:text-sky-300">View on eBird</a></div>` : ''}
                                        ${obs.subId ? `<a href="https://ebird.org/checklist/${encodeURIComponent(obs.subId)}" target="_blank" rel="noopener noreferrer" class="text-sky-400 hover:text-sky-300 mt-1 inline-block"><i class="fa-solid fa-external-link mr-1"></i>View checklist</a>` : ''}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;
                
                const popupElement = document.createElement('div');
                popupElement.innerHTML = popupContent;
                popupElement.querySelectorAll('img').forEach(image => {
                    image.addEventListener('error', () => { image.style.display = 'none'; }, { once: true });
                });
                marker.bindPopup(popupElement, { maxWidth: 350 });
            });
            
            // Store collapsed for focus
            window.filteredAlerts = collapsed;
        }
        
        // Format date
        function formatDate(date) {
            const now = new Date();
            const diff = Math.floor((now - date) / (1000 * 60 * 60 * 24));
            if (diff === 0) return 'Today';
            if (diff === 1) return 'Yesterday';
            if (diff < 7) return `${diff} days ago`;
            return date.toLocaleDateString();
        }
        
        // Format date with time
        function formatDateTime(date) {
            const now = new Date();
            const diff = Math.floor((now - date) / (1000 * 60 * 60 * 24));
            const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            
            if (diff === 0) return `Today ${timeStr}`;
            if (diff === 1) return `Yesterday ${timeStr}`;
            if (diff < 7) return `${diff}d ago ${timeStr}`;
            return `${date.toLocaleDateString()} ${timeStr}`;
        }
        
        // Calculate distance between two coordinates in meters (Haversine formula)
        function getDistanceMeters(lat1, lng1, lat2, lng2) {
            const R = 6371000; // Earth's radius in meters
            const dLat = (lat2 - lat1) * Math.PI / 180;
            const dLng = (lng2 - lng1) * Math.PI / 180;
            const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                      Math.sin(dLng/2) * Math.sin(dLng/2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            return R * c;
        }
        
        // Collapse observations of same species within given distance (meters)
        function collapseNearbyObservations(alerts, maxDistanceMeters) {
            const collapsed = [];
            const used = new Set();
            
            for (let i = 0; i < alerts.length; i++) {
                if (used.has(i)) continue;
                
                const alert = alerts[i];
                const nearby = [alert];
                used.add(i);
                
                // Find all other observations of same species within distance
                for (let j = i + 1; j < alerts.length; j++) {
                    if (used.has(j)) continue;
                    
                    const other = alerts[j];
                    if (other.species !== alert.species) continue;
                    
                    // Calculate distance if we have coordinates
                    if (alert.lat && alert.lng && other.lat && other.lng) {
                        const dist = getDistanceMeters(alert.lat, alert.lng, other.lat, other.lng);
                        if (dist <= maxDistanceMeters) {
                            nearby.push(other);
                            used.add(j);
                        }
                    } else if (alert.location === other.location) {
                        // Same location name = collapse
                        nearby.push(other);
                        used.add(j);
                    }
                }
                
                // Sort nearby by date (newest first) and use the latest one as the main record
                nearby.sort((a, b) => b.date - a.date);
                const latest = nearby[0];
                
                // Create collapsed record with all observations
                collapsed.push({
                    ...latest,
                    observations: nearby,
                    count: nearby.reduce((sum, o) => sum + (o.count || 1), 0)
                });
            }
            
            return collapsed;
        }
        
        // Focus on alert
        function focusAlert(idx) {
            const alert = window.filteredAlerts[idx];
            if (!alert) return;
            
            const coords = getCoords(alert.location, alert.lat, alert.lng);
            map.flyTo(coords, 15, { duration: 0.8 });
            
            // Find and open the marker popup
            markers.eachLayer(marker => {
                if (marker.getLatLng().lat === coords[0] && marker.getLatLng().lng === coords[1]) {
                    marker.openPopup();
                }
            });
        }
        
        // Region Management
        function getRegionCode() {
            return localStorage.getItem('ebirdRegion') || 'SG';
        }
        
        function setRegionCode(code) {
            localStorage.setItem('ebirdRegion', code);
            currentRegion = code;
            
            // Update region name in header
            const regionData = REGION_COORDS[code];
            if (regionData) {
                document.getElementById('region-name').textContent = regionData.name;
            }
        }
        
        function updateMapRegion(code) {
            // Check if it's a known region
            const coords = REGION_COORDS[code];
            if (coords) {
                map.flyTo([coords.lat, coords.lng], coords.zoom, { duration: 1.5 });
                return;
            }
            
            // Check if it's a known hotspot
            const hotspot = POPULAR_HOTSPOTS[code];
            if (hotspot) {
                map.flyTo([hotspot.lat, hotspot.lng], hotspot.zoom, { duration: 1.5 });
                return;
            }
        }
        
        // Region search handler
        function handleRegionSearch() {
            const input = document.getElementById('region-search');
            const code = input.value.trim().toUpperCase();
            
            if (!code) {
                alert('Please enter an eBird region code (e.g., US, CA, US-CA, GB-ENG) or hotspot code');
                return;
            }
            
            // Hide suggestions
            document.getElementById('region-suggestions').classList.add('hidden');
            
            // Use the location's subdivision for eBird while keeping its map search key
            const selectedLocation = POPULAR_HOTSPOTS[code];
            const apiRegionCode = selectedLocation?.apiRegion || code;
            setRegionCode(apiRegionCode);
            
            // Update the region name display
            const regionNameEl = document.getElementById('region-name');
            if (REGION_COORDS[code]) {
                regionNameEl.textContent = REGION_COORDS[code].name;
            } else if (selectedLocation) {
                regionNameEl.textContent = selectedLocation.name;
            } else {
                regionNameEl.textContent = code;
            }
            
            // Try to update map if it's a known region or hotspot
            updateMapRegion(code);
            
            // Auto-fetch with new region
            if (getApiKey()) {
                fetchLiveData();
            }
        }
        
        // Show region suggestions based on search input
        function showRegionSuggestions(searchTerm) {
            const suggestionsDiv = document.getElementById('region-suggestions');
            const term = searchTerm.toLowerCase();
            
            // If empty, show all countries & regions as default options
            if (!term) {
                const allRegions = Object.entries(REGION_COORDS);
                const html = '<div class="px-3 py-2 bg-slate-900/50 text-slate-400 text-xs font-semibold uppercase">Countries & Regions</div>' +
                    allRegions.map(([code, data]) => `
                        <div class="region-suggestion px-4 py-3 hover:bg-slate-700 cursor-pointer border-b border-slate-700 last:border-b-0 transition" data-code="${code}">
                            <div class="flex justify-between items-center">
                                <span class="text-white font-medium">${data.name}</span>
                                <span class="text-slate-400 text-sm font-mono">${code}</span>
                            </div>
                        </div>
                    `).join('');
                
                suggestionsDiv.innerHTML = html;
                suggestionsDiv.classList.remove('hidden');
                
                // Add click handlers
                suggestionsDiv.querySelectorAll('.region-suggestion').forEach(item => {
                    item.addEventListener('click', function() {
                        const code = this.dataset.code;
                        document.getElementById('region-search').value = code;
                        handleRegionSearch();
                    });
                });
                return;
            }
            
            // Filter regions by code or name
            const regionMatches = Object.entries(REGION_COORDS).filter(([code, data]) => {
                return code.toLowerCase().includes(term) || 
                       data.name.toLowerCase().includes(term);
            });
            
            // Filter hotspots by code, name, or region
            const hotspotMatches = Object.entries(POPULAR_HOTSPOTS).filter(([code, data]) => {
                return code.toLowerCase().includes(term) || 
                       data.name.toLowerCase().includes(term) ||
                       data.region.toLowerCase().includes(term);
            });
            
            if (regionMatches.length === 0 && hotspotMatches.length === 0) {
                suggestionsDiv.innerHTML = '<div class="px-4 py-3 text-slate-400 text-sm">No matches. Enter any eBird region/hotspot code (e.g., US-CA, L12345678)</div>';
                suggestionsDiv.classList.remove('hidden');
                return;
            }
            
            let html = '';
            
            // Add region matches first (prioritized at top)
            if (regionMatches.length > 0) {
                html += '<div class="px-3 py-2 bg-slate-900/50 text-slate-400 text-xs font-semibold uppercase">Countries & Regions</div>';
                html += regionMatches.map(([code, data]) => `
                    <div class="region-suggestion px-4 py-3 hover:bg-slate-700 cursor-pointer border-b border-slate-700 transition" data-code="${code}">
                        <div class="flex justify-between items-center">
                            <span class="text-white font-medium">${data.name}</span>
                            <span class="text-slate-400 text-sm font-mono">${code}</span>
                        </div>
                    </div>
                `).join('');
            }
            
            // Add hotspot matches below
            if (hotspotMatches.length > 0) {
                html += '<div class="px-3 py-2 bg-slate-900/50 text-slate-400 text-xs font-semibold uppercase mt-1">Hotspots</div>';
                html += hotspotMatches.slice(0, 10).map(([code, data]) => `
                    <div class="region-suggestion px-4 py-3 hover:bg-slate-700 cursor-pointer border-b border-slate-700 last:border-b-0 transition" data-code="${code}" data-lat="${data.lat}" data-lng="${data.lng}" data-zoom="${data.zoom}">
                        <div class="flex justify-between items-start gap-3">
                            <div>
                                <div class="text-white font-medium">${data.name}</div>
                                <div class="text-slate-400 text-xs mt-1">${data.region}</div>
                            </div>
                            <span class="text-slate-500 text-xs font-mono whitespace-nowrap">${code}</span>
                        </div>
                    </div>
                `).join('');
            }
            
            suggestionsDiv.innerHTML = html;
            suggestionsDiv.classList.remove('hidden');
            
            // Add click handlers to suggestions
            suggestionsDiv.querySelectorAll('.region-suggestion').forEach(item => {
                item.addEventListener('click', function() {
                    const code = this.dataset.code;
                    const lat = this.dataset.lat;
                    const lng = this.dataset.lng;
                    const zoom = this.dataset.zoom;
                    
                    document.getElementById('region-search').value = code;
                    
                    // If it's a hotspot with coordinates, fly to it
                    if (lat && lng && zoom) {
                        map.flyTo([parseFloat(lat), parseFloat(lng)], parseInt(zoom), { duration: 1.5 });
                    }
                    
                    handleRegionSearch();
                });
            });
        }
        
        // Region search input - show suggestions as typing
        document.getElementById('region-search').addEventListener('input', function(e) {
            showRegionSuggestions(e.target.value);
        });
        
        // Region search input - show all countries/regions on focus
        document.getElementById('region-search').addEventListener('focus', function(e) {
            showRegionSuggestions(e.target.value);
        });
        
        // Region search input - press Enter to search
        document.getElementById('region-search').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleRegionSearch();
            }
        });
        
        // Region search button click
        document.getElementById('region-search-btn').addEventListener('click', handleRegionSearch);
        
        // Hide suggestions when clicking outside
        document.addEventListener('click', function(e) {
            const searchInput = document.getElementById('region-search');
            const suggestionsDiv = document.getElementById('region-suggestions');
            
            if (!searchInput.contains(e.target) && !suggestionsDiv.contains(e.target)) {
                suggestionsDiv.classList.add('hidden');
            }
        });
        
        // Set initial region search value
        document.getElementById('region-search').value = getRegionCode();
        document.getElementById('region-name').textContent = (REGION_COORDS[getRegionCode()] || { name: getRegionCode() }).name;
        
        // API Key Management
        function getApiKey() {
            return localStorage.getItem('ebirdApiKey') || '';
        }
        
        function showApiKeyModal() {
            const modal = document.getElementById('api-key-modal');
            const input = document.getElementById('api-key-input');
            input.value = localStorage.getItem('ebirdApiKey') || '';
            modal.style.display = 'flex';
            input.focus();
        }
        
        function hideApiKeyModal() {
            document.getElementById('api-key-modal').style.display = 'none';
        }
        
        function saveApiKey() {
            const input = document.getElementById('api-key-input');
            const key = input.value.trim();
            
            if (!key) {
                alert('Please enter an API key');
                return;
            }
            
            localStorage.setItem('ebirdApiKey', key);
            hideApiKeyModal();
            
            // Auto-fetch data with new key
            fetchLiveData();
        }
        
        function openApiKeyPage() {
            window.open('https://ebird.org/api/keygen', '_blank');
        }
        
        // Check for API key on load
        window.addEventListener('DOMContentLoaded', () => {
            if (!getApiKey()) {
                showApiKeyModal();
            }
        });
        
        // Fetch live data from eBird API (Notable Observations)
        async function fetchLiveData() {
            const btn = document.getElementById('fetch-btn');
            const icon = document.getElementById('fetch-icon');
            const text = document.getElementById('fetch-text');
            const listEl = document.getElementById('bird-list');
            const apiKey = getApiKey();
            
            // Show loading state
            btn.disabled = true;
            btn.classList.add('opacity-50');
            icon.className = 'fa-solid fa-spinner fa-spin';
            text.textContent = 'Fetching...';
            
            listEl.innerHTML = `
                <div class="text-center py-12 text-slate-500">
                    <i class="fa-solid fa-spinner fa-spin text-4xl mb-4 text-amber-400"></i>
                    <p class="text-amber-300">Fetching from eBird API...</p>
                </div>`;
            
            try {
                // eBird API endpoint for notable observations
                const back = Math.min(daysFilter, 30); // API supports up to 30 days
                const regionCode = getRegionCode();
                const response = await fetch(
                    `https://api.ebird.org/v2/data/obs/${regionCode}/recent/notable?back=${back}&detail=full`,
                    {
                        headers: {
                            'X-eBirdApiToken': apiKey
                        }
                    }
                );
                
                if (!response.ok) {
                    if (response.status === 403) {
                        throw new Error('Invalid API key. Please check your eBird API key.');
                    }
                    throw new Error(`API error: ${response.status}`);
                }
                
                const data = await response.json();
                console.log('eBird API returned', data.length, 'observations');
                
                // Convert API response to our alert format
                const alerts = data.map(obs => {
                    return {
                        species: obs.comName,
                        sciName: obs.sciName || '',
                        speciesCode: obs.speciesCode,
                        location: obs.locName || 'Unknown',
                        lat: obs.lat,
                        lng: obs.lng,
                        date: new Date(obs.obsDt),
                        count: obs.howMany || 1,
                        observer: obs.userDisplayName || 'eBird User',
                        confirmed: obs.obsValid,
                        subId: obs.subId || null, // Checklist ID for linking to eBird
                        hasMedia: obs.hasRichMedia || false, // Whether observation has photos/audio
                        comments: obs.obsComments || '', // User comments on observation
                        image: '' // Will be populated by fetchAllSpeciesImages
                    };
                });
                
                if (alerts.length > 0) {
                    // Fetch images from iNaturalist
                    await fetchAllSpeciesImages(alerts);
                    allAlerts = alerts;
                    renderAlerts();
                    text.textContent = 'Refresh';
                } else {
                    showFetchError('No notable observations found for this period.');
                }
                
            } catch (error) {
                console.error('Fetch error:', error);
                showFetchError(error.message || 'Could not fetch eBird data.');
            }
            
            // Reset button
            btn.disabled = false;
            btn.classList.remove('opacity-50');
            icon.className = 'fa-solid fa-sync';
        }
        
        // Fetch image from iNaturalist for a species
        async function fetchSpeciesImage(sciName, comName) {
            try {
                // Try iNaturalist API first - it has great wildlife photos
                const searchTerm = encodeURIComponent(sciName || comName);
                const response = await fetch(
                    `https://api.inaturalist.org/v1/taxa?q=${searchTerm}&per_page=1`
                );
                
                if (response.ok) {
                    const data = await response.json();
                    if (data.results && data.results.length > 0 && data.results[0].default_photo) {
                        return data.results[0].default_photo.medium_url || data.results[0].default_photo.square_url;
                    }
                }
            } catch (e) {
                console.log('Could not fetch image for', sciName);
            }
            return '';
        }
        
        // Cache for fetched images
        const imageCache = {};
        
        // Fetch all species images in parallel
        async function fetchAllSpeciesImages(alerts) {
            const uniqueSpecies = [...new Map(alerts.map(a => [a.sciName, a])).values()];
            
            await Promise.all(uniqueSpecies.map(async (alert) => {
                const key = alert.sciName || alert.species;
                if (!imageCache[key]) {
                    imageCache[key] = await fetchSpeciesImage(alert.sciName, alert.species);
                }
            }));
            
            // Update alerts with cached images
            alerts.forEach(alert => {
                const key = alert.sciName || alert.species;
                if (imageCache[key]) {
                    alert.image = imageCache[key];
                }
            });
        }

        function showFetchError(msg) {
            document.getElementById('bird-list').innerHTML = `
                <div class="text-center py-8 text-slate-500">
                    <i class="fa-solid fa-exclamation-triangle text-3xl mb-4 text-amber-500"></i>
                    <p class="text-amber-300 text-sm">${escapeHtml(msg)}</p>
                    <button id="retry-fetch-btn" class="mt-4 bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-lg text-sm">
                        Try Again
                    </button>
                </div>`;
                document.getElementById('retry-fetch-btn').addEventListener('click', fetchLiveData);
        }

            document.getElementById('save-api-key-btn').addEventListener('click', saveApiKey);
            document.getElementById('close-hotspots-btn').addEventListener('click', hideHotspotsModal);
            document.getElementById('fetch-btn').addEventListener('click', fetchLiveData);
            document.getElementById('update-api-key-btn').addEventListener('click', showApiKeyModal);
            document.getElementById('dark-mode-btn').addEventListener('click', toggleDarkMode);
            document.getElementById('sidebar-handle').addEventListener('click', toggleSidebar);
        
        // Auto-fetch on page load (only if API key exists)
        if (getApiKey()) {
            fetchLiveData();
        }
    