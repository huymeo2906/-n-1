Bizweb.CustomerAddress = {
    toggleEditForm: function (id) {
        var editElement = document.getElementById('edit_address_' + id);
        var viewElement = document.getElementById('view_address_' + id);
        return false;
    },

    toggleNewForm: function () {
        var addElement = document.getElementById('add_address');
        return false;
    },

    destroy: function (id, confirmMsg) {
        if (confirm(confirmMsg || "Bạn có chắc muốn xóa sổ địa chỉ này?"))
            Bizweb.postLink('/account/deleteAddress/' + id);
    }
}