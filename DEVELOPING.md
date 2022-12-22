# Developing Features

This document describes how to develop features in this application.

- [Add a new Column](#add-a-new-column)

## Add a new Column

For adding a new column, following steps needs to be followed.

1. Firstly, we need to make a handler by that column name and add that in provider in shared module.
2. We need to add new column type to ColumnTypeEnum at core/store/models. This will be used everywhere in our application.
3. In shared module, add that new column enum type to cell-renderer.service to provide display and edit templates in table-grid.
4. Similarly, add to sortComparer in column-builder and column-sorting services.
5. To provide certain permission, we need to update in the column-permission-utility.service.
6. If column is having some configurations, we have to store those information in column metadata.
7. For configurations we have to add column configuration in column-header-renderer.component.
8. The specific configuration will be added in add-column-configuration.component, which will be displayed when user add that column(or open the Column Configuration from column header).
9. New column icon will be added by changing the icomoon selection.json.
