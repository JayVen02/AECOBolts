# AECOBolts Website - Buhay ni KuyAECO

A responsive, modern website built with vanilla HTML, CSS, and JavaScript for the AECOBolts program.

## 🚀 Features

### Responsive Design
- Fully responsive layout that works on desktop, tablet, and mobile devices
- Mobile-first approach with optimized navigation
- Smooth animations and transitions

### Sections Included

#### Home Section
- **Description**: Overview of the AECOBolts program and its mission
- **Instructions**: Step-by-step guide for participants
- **Highlights**: Detailed breakdown of Days 1-3 activities

#### Main Sections
- **Speakers**: Featured speakers with photos, positions, and topics
- **Schedule**: Complete 3-day schedule of activities
- **House Tasks**: Interactive task management with point system
- **Leaderboards**: Real-time team and individual rankings

### Interactive Features
- Smooth scrolling navigation
- Mobile hamburger menu
- Tab-based leaderboard switching
- Animated scroll-to-top button
- Loading screen with spinner
- Hover effects and animations
- Real-time point updates simulation

### Technical Features
- Modern CSS Grid and Flexbox layouts
- CSS animations and transitions
- Intersection Observer API for scroll animations
- Throttled scroll events for performance
- Accessibility features (keyboard navigation, focus indicators)
- Error handling for missing images

## 📁 File Structure

```
AECOBolts/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Design Elements

### Color Scheme
- Primary: `#e74c3c` (Red)
- Secondary: `#f39c12` (Orange)
- Gradient: `#667eea` to `#764ba2` (Blue-Purple)
- Background: `#f8f9fa` (Light Gray)

### Typography
- Font Family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Responsive font sizes
- Proper line heights for readability

### Icons
- Font Awesome icons for visual elements
- Consistent icon usage throughout the site

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 768px and below
- **Mobile**: 480px and below

## 🔧 How to Use

1. **Open the website**: Open `index.html` in any modern web browser
2. **Navigation**: Use the navigation menu to jump to different sections
3. **Mobile**: On mobile devices, tap the hamburger menu for navigation
4. **Leaderboards**: Click the tabs to switch between team and individual rankings
5. **Tasks**: Click on task items to mark them as completed (simulation)

## ✨ Key Features Breakdown

### Hero Section
- Eye-catching gradient background
- Animated lightning bolt icon
- Call-to-action button with smooth scroll

### Instructions Section
- Grid layout with icon cards
- Hover effects and animations
- Clear step-by-step guidance

### Highlights Timeline
- Visual timeline for 3-day program
- Day-by-day breakdown with detailed activities
- Lightning bolt bullet points

### Speakers Section
- Professional speaker cards
- Placeholder for speaker photos
- Position and topic information

### Schedule Section
- Day-by-day schedule layout
- Time-activity format
- Color-coded sections

### House Tasks
- Categorized task lists
- Point system display
- Interactive completion feature

### Leaderboards
- Tab-based switching
- Ranking system with badges
- Animated updates
- Gold, silver, bronze highlighting

## 🛠️ Customization

### Adding New Speakers
Edit the speakers section in `index.html`:
```html
<div class="speaker-card">
    <div class="speaker-image">
        <!-- Add speaker image here -->
    </div>
    <div class="speaker-info">
        <h3>Speaker Name</h3>
        <p class="speaker-position">Position</p>
        <p class="speaker-topic"><strong>Topic:</strong> "Topic Title"</p>
        <p class="speaker-bio">Speaker bio...</p>
    </div>
</div>
```

### Modifying Colors
Update the CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #e74c3c;
    --secondary-color: #f39c12;
    --gradient-start: #667eea;
    --gradient-end: #764ba2;
}
```

### Adding New Tasks
Add to the appropriate task category in `index.html`:
```html
<div class="task-item">
    <div class="task-icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <div class="task-content">
        <h4>Task Title</h4>
        <p>Task description</p>
        <span class="task-points">+X points</span>
    </div>
</div>
```

## 🌟 Performance Optimizations

- Throttled scroll events
- Intersection Observer for animations
- Optimized CSS animations
- Lazy loading considerations
- Minimal external dependencies

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues, feature requests, or pull requests to improve the website.

## 📞 Contact

For questions or support regarding the AECOBolts website, please contact:
- Email: info@aecobolts.com
- Phone: +1 (555) 123-4567

---

**Built with ❤️ for the AECOBolts community**
