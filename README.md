# EduBooks

## TECHNOLOGIES USED

- HTML5 (Semantic document tags: header, nav, main, section, article, footer)
- CSS3 (Custom styling using Flexbox, CSS Grid, CSS Variables, Media Queries)
- JavaScript (Vanilla ES6+ DOM Manipulation, Event Listeners)
- Font Awesome 6.5.1 (UI & Brand Vector Icons via CDN)
- Google Fonts (Inter font family)

## JAVASCRIPT FEATURES IMPLEMENTED

1. Real-Time Book Filtering (Search Bar):
   - Listens to the 'input' event on the search box.
   - Dynamically searches titles and category tags of all book cards.
   - Hides non-matching cards and reveals a custom 'no books found' notification if 0 matches occur.

2. Newsletter Form Client-Side Validation:
   - Prevents page reload using event.preventDefault().
   - Validates user input using a strict email regex pattern (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).
   - Manipulates DOM text and classes to render clear red error alerts or green success confirmations.

3. Interactive Book Details Modal Window:
   - Clicking 'View Details' on any book dynamically parses card data attributes (Title, Category, Author, ISBN, Synopsis).
   - Injects the metadata into an accessible modal overlay with keyboard (Escape) and backdrop dismiss triggers.

4. Mobile Responsive Drawer Navigation:
   - Toggles mobile navigation menu display via DOM class manipulation on smaller screen viewports.
